import { ServerCredentials, Server } from 'grpc';
import { protoIndex } from './rpc';
import campaign from './handlers/campaign';
import donation from './handlers/donation';
import reward from './handlers/reward';
import user from './handlers/user';
import { createConnection } from 'typeorm';
import ormconfig from './ormconfig';

protoIndex();

const port = process.env.NODE_PORT || 6001;

type StartServerType = () => void;
export const startServer: StartServerType = (): void => {
  // create a new gRPC server
  const server: Server = new Server();

  // register all the handler here...
  server.addService(campaign.service, campaign.handler);
  server.addService(donation.service, donation.handler);
  server.addService(reward.service, reward.handler);
  server.addService(user.service, user.handler);

  // define the host/port for server
  server.bindAsync(
    `0.0.0.0:${port}`,
    ServerCredentials.createInsecure(),
    (err: Error, port: number) => {
      if (err != null) {
        return console.error(err);
      }
      console.log(`🚀 gRPC listening on ${port}`);
    },
  );

  // start the gRPC server
  server.start();
};

createConnection(ormconfig as any)
  .then(() => startServer());

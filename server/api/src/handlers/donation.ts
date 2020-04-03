import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { Donation } from '../rpc/models/donation_pb';
import { IDonationServer, DonationService } from '../rpc/services_grpc_pb';
import {
  SendRequest,
  SendEmailRequest,
  FindDonationRequest,
} from '../rpc/common_pb';
import { DonationUseCase } from '../usecases/donation';

class DonationHandler implements IDonationServer {
  send(call: ServerUnaryCall<SendRequest>, callback: sendUnaryData<Donation>) {
    const usecases = new DonationUseCase();
  }

  sendEmail(call: ServerUnaryCall<SendEmailRequest>, callback: sendUnaryData<Donation>) {
    const usecases = new DonationUseCase();
  }

  find(call: ServerUnaryCall<FindDonationRequest>, callback: sendUnaryData<Donation>) {
    const usecases = new DonationUseCase();
    usecases.find();
  }
}

export default {
  service: DonationService,
  handler: new DonationHandler
};

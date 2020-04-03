import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { Reward } from '../rpc/models/reward_pb';
import { IRewardServer, RewardService } from '../rpc/services_grpc_pb';
import {
  CreateRewardRequest,
  DestroyRewardRequest,
  UpdateRewardRequest,
} from '../rpc/common_pb';
import { RewardUseCase } from '../usecases/reward';

class RewardHandler implements IRewardServer {
  create(call: ServerUnaryCall<CreateRewardRequest>, callback: sendUnaryData<Reward>) {
    const usecases = new RewardUseCase();
    // usecases.create
  }

  destroy(call: ServerUnaryCall<DestroyRewardRequest>, callback: sendUnaryData<Reward>) {
    const usecases = new RewardUseCase();
  }

  update(call: ServerUnaryCall<UpdateRewardRequest>, callback: sendUnaryData<Reward>) {
    const usecases = new RewardUseCase();

  }
}

export default {
  service: RewardService,
  handler: new RewardHandler()
};

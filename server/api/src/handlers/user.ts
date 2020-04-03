import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { User } from '../rpc/models/user_pb';
import { IUserServer, UserService } from '../rpc/services_grpc_pb';
import {
  GetAccountDetailsRequest,
  DeleteUserRequest,
  LikesRequest,
} from '../rpc/common_pb';
import { CampaignList } from '../rpc/models/campaign_pb';
import { UserUseCase } from '../usecases/user';

class UserHandler implements IUserServer {
  getAccountDetails(call: ServerUnaryCall<GetAccountDetailsRequest>, callback: sendUnaryData<User>) {
    const usecases = new UserUseCase();
    usecases.getAccountDetails();
  }

  delete(call: ServerUnaryCall<DeleteUserRequest>, callback: sendUnaryData<User>) {
    const usecases = new UserUseCase();
  }

  likes(call: ServerUnaryCall<LikesRequest>, callback: sendUnaryData<CampaignList>) {
    const usecases = new UserUseCase();
  }
}

export default {
  service: UserService,
  handler: new UserHandler()
};

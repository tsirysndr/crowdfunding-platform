import { ServerUnaryCall, sendUnaryData } from 'grpc';
import { Campaign, CampaignList } from '../rpc/models/campaign_pb';
import { Withdrawal, WithdrawalList } from '../rpc/models/withdrawal_pb';
import { CampaignService, ICampaignServer } from '../rpc/services_grpc_pb';
import {
  FindAllCampaignsRequest,
  FindWithdrawalRequest,
  FindWithdrawalsRequest,
  ConfigureWithdrawalRequest,
  DeleteWithdrawalRequest,
  UpdateCampaignRequest,
  DeleteCampaignRequest,
  PostUpdateRequest
} from '../rpc/common_pb';
import { CampaignUseCase } from '../usecases/compaign';

class CampaignHandler implements ICampaignServer {
  async findAll(call: ServerUnaryCall<FindAllCampaignsRequest>, callback: sendUnaryData<CampaignList>) {
    const usecases = new CampaignUseCase();
    const result = await usecases.findAll();
    const campaigns = new CampaignList();
    campaigns.setItemsList(result.map(item => {
      const campaign = new Campaign();
      campaign.setId(item.id);
      return campaign;
    }));
    callback(null, campaigns);
  }

  findWithdrawal(call: ServerUnaryCall<FindWithdrawalRequest>, callback: sendUnaryData<Withdrawal>) {
    const usecases = new CampaignUseCase();
  }

  findWithdrawals(call: ServerUnaryCall<FindWithdrawalsRequest>, callback: sendUnaryData<WithdrawalList>) {
    const usecases = new CampaignUseCase();
  }

  configureWithdrawal(call: ServerUnaryCall<ConfigureWithdrawalRequest>, callback: sendUnaryData<Withdrawal>) {
    const usecases = new CampaignUseCase();
  }

  deleteWithdrawal(call: ServerUnaryCall<DeleteWithdrawalRequest>, callback: sendUnaryData<Withdrawal>) {
    const usecases = new CampaignUseCase();
  }

  update(call: ServerUnaryCall<UpdateCampaignRequest>, callback: sendUnaryData<Campaign>) {
    const usecases = new CampaignUseCase();
  }

  delete(call: ServerUnaryCall<DeleteCampaignRequest>, callback: sendUnaryData<Campaign>) {
    const usecases = new CampaignUseCase();
  }

  postUpdate(call: ServerUnaryCall<PostUpdateRequest>, callback: sendUnaryData<Campaign>) {
    const usecases = new CampaignUseCase();

  }
}

export default {
  service: CampaignService,
  handler: new CampaignHandler()
};

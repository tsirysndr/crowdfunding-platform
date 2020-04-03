import { getManager, Repository } from 'typeorm';
import { Campaign } from '../entity/campaign';
import { Withdrawal } from '../entity/withdrawal';


export class CampaignUseCase {
  private campaign: Repository<Campaign>;
  private withdrawal: Repository<Withdrawal>;

  constructor() {
    this.campaign = getManager().getRepository(Campaign);
    this.withdrawal = getManager().getRepository(Withdrawal);
  }

  findAll(): Promise<Campaign[]> {
    return this.campaign.find();
  }

  findWithdrawal() {

  }

  findWithdrawals() {

  }

  configureWithdrawal() {

  }

  deleteWithdrawal() {

  }

  update() {

  }

  delete() {

  }

  postUpdate() {

  }
}

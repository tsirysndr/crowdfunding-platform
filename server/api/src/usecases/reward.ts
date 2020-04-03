import { Repository, getManager } from 'typeorm';
import { Reward } from '../entity/reward';

export class RewardUseCase {
  private rewards: Repository<Reward>;

  constructor() {
    this.rewards = getManager().getRepository(Reward);
  }

  create() {

  }

  destroy() {

  }

  update() {

  }

}

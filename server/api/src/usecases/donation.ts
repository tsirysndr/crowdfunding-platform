import { Repository, getManager } from 'typeorm';
import { Donation } from '../entity/donation';

export class DonationUseCase {
  private donation: Repository<Donation>;
  constructor() {
    this.donation = getManager().getRepository(Donation);
  }

  send() {

  }

  sendEmail() {

  }

  find() {

  }

}

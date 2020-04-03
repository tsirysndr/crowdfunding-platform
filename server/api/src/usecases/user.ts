import { Repository, getManager } from 'typeorm';
import { User } from '../entity/user';


export class UserUseCase {
  private user: Repository<User>;
  constructor() {
    this.user = getManager().getRepository(User);
  }
  getAccountDetails() {

  }

  delete() {

  }

  likes() {

  }
}


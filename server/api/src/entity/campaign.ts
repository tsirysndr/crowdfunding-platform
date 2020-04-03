import { Entity, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { User } from './user';
import { Withdrawal } from './withdrawal';
import { Like } from './like';
import { Donation } from './donation';
import { Update } from './update';
import { Category } from './category';
import { Reward } from './reward';

@Entity()
export class Campaign extends BaseEntity {
  @ManyToOne(type => User, user => user.campaigns)
  user: User;

  @OneToMany(type => Withdrawal, withdrawal => withdrawal.campaign)
  withrawals: Withdrawal[];

  @OneToMany(type => Like, like => like.images)
  likes: Like[];

  @OneToMany(type => Donation, donation => donation.campaign)
  donations: Donation[];

  @OneToMany(type => Update, update => update.campaign)
  updates: Update[];

  @ManyToOne(type => Category, category => category.campaigns)
  category: Category;

  @OneToMany(type => Reward, reward => reward.campaign)
  rewards: Reward[];
}


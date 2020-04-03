import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { User } from './user';
import { Campaign } from './campaign';

@Entity()
export class Like extends BaseEntity {
  @ManyToOne(type => User, user => user.likes)
  user: User;

  @OneToMany(type => Campaign, campaign => campaign.likes)
  images: Campaign[]
}

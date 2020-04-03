import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { Like } from './like';
import { Campaign } from './campaign';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  avatar: string;
  @Column()
  status: string;
  @Column()
  role: string;
  @OneToMany(type => Like, like => like.user)
  likes: Like[];
  @OneToMany(type => Campaign, campaign => campaign.user)
  campaigns: Campaign[];
}

import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { Campaign } from './campaign';
import { Donation } from './donation';

@Entity()
export class Reward extends BaseEntity {
  @ManyToOne(type => Campaign, campaign => campaign.rewards)
  campaign: Campaign;
  @OneToMany(type => Donation, donation => donation.rewards)
  donations: Donation[];
}

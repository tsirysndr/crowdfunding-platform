import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { Campaign } from './campaign';
import { Reward } from './reward';

@Entity()
export class Donation extends BaseEntity {
  @ManyToOne(type => Campaign, campaign => campaign.donations)
  campaign: Campaign;
  @ManyToOne(type => Reward, reward => reward.donations)
  rewards: Reward;
}

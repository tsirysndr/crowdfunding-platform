import { BaseEntity } from './base';
import { Entity, Column, ManyToOne } from 'typeorm';
import { Campaign } from './campaign';

@Entity()
export class Withdrawal extends BaseEntity {
  @ManyToOne(type => Campaign, campaign => campaign.withrawals)
  campaign: Campaign;
}

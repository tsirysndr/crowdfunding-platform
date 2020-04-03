import { Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base';
import { Campaign } from './campaign';

@Entity()
export class Update extends BaseEntity {
  @ManyToOne(type => Campaign, campaign => campaign.updates)
  campaign: Campaign;
}

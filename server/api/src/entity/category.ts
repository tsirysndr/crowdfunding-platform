import { Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base';
import { Campaign } from './campaign';

@Entity()
export class Category extends BaseEntity {
  @OneToMany(type => Category, category => category.campaigns)
  campaigns: Campaign[];
}

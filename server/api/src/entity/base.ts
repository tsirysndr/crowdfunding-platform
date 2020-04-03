import { PrimaryColumn, BeforeInsert } from 'typeorm';
import ObjectID from 'bson-objectid';

export abstract class BaseEntity {
  @PrimaryColumn()
  id: string;

  @BeforeInsert()
  generateId() {
    this.id = ObjectID.generate();
  }
}

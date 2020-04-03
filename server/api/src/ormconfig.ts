import { Campaign } from './entity/campaign';
import { Category } from './entity/category';
import { Donation } from './entity/donation';
import { Like } from './entity/like';
import { Reward } from './entity/reward';
import { Update } from './entity/update';
import { User } from './entity/user';
import { Withdrawal } from './entity/withdrawal';

export default {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: +process.env.POSTGRES_PORT || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: false,
  /*
  cache: {
    options: {
      host: process.env.REDIS_HOST,
      password: process.env.REDIS_PASSWORD,
      port: process.env.REDIS_PORT,
      tls: process.env.REDIS_TLS === '1',
    },
    type: 'redis',
  },
  */
  entities: [
    Campaign,
    Category,
    Donation,
    Like,
    Reward,
    Update,
    User,
    Withdrawal,
  ],
}

// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import {
  Campaign,
  User,
  Withdrawal,
  Like,
  Donation,
  Reward,
  Update,
  Category,
  Context
} from "../types";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type AllCampaignsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Campaign | null>
        | null
        | Promise<Array<Campaign | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>;
      };

  export type AllCategoriesResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Category | null>
        | null
        | Promise<Array<Category | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Category | null>
          | null
          | Promise<Array<Category | null> | null>;
      };

  export type AllDonationsResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Donation | null>
        | null
        | Promise<Array<Donation | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>;
      };

  export type AllUsersResolver =
    | ((
        parent: undefined,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User[] | null | Promise<User[] | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User[] | null | Promise<User[] | null>;
      };

  export interface Type {
    allCampaigns:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Campaign | null>
            | null
            | Promise<Array<Campaign | null> | null>;
        };

    allCategories:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Category | null>
          | null
          | Promise<Array<Category | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Category | null>
            | null
            | Promise<Array<Category | null> | null>;
        };

    allDonations:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Donation | null>
            | null
            | Promise<Array<Donation | null> | null>;
        };

    allUsers:
      | ((
          parent: undefined,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User[] | null | Promise<User[] | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User[] | null | Promise<User[] | null>;
        };
  }
}

export namespace CampaignResolvers {
  export const defaultResolvers = {
    id: (parent: Campaign) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type UserResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type WithdrawalsResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Withdrawal | null>
        | null
        | Promise<Array<Withdrawal | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Withdrawal | null>
          | null
          | Promise<Array<Withdrawal | null> | null>;
      };

  export type LikesResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Like | null> | null | Promise<Array<Like | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Like | null> | null | Promise<Array<Like | null> | null>;
      };

  export type DonationsResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Donation | null>
        | null
        | Promise<Array<Donation | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>;
      };

  export type UpdatesResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Update | null> | null | Promise<Array<Update | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Update | null> | null | Promise<Array<Update | null> | null>;
      };

  export type CategoryResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Category | null | Promise<Category | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Category | null | Promise<Category | null>;
      };

  export type RewardsResolver =
    | ((
        parent: Campaign,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Array<Reward | null> | null | Promise<Array<Reward | null> | null>)
    | {
        fragment: string;
        resolve: (
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Reward | null> | null | Promise<Array<Reward | null> | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    user:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    withdrawals:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Withdrawal | null>
          | null
          | Promise<Array<Withdrawal | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Withdrawal | null>
            | null
            | Promise<Array<Withdrawal | null> | null>;
        };

    likes:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Like | null> | null | Promise<Array<Like | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Array<Like | null> | null | Promise<Array<Like | null> | null>;
        };

    donations:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Donation | null>
            | null
            | Promise<Array<Donation | null> | null>;
        };

    updates:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Update | null> | null | Promise<Array<Update | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Update | null>
            | null
            | Promise<Array<Update | null> | null>;
        };

    category:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Category | null | Promise<Category | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Category | null | Promise<Category | null>;
        };

    rewards:
      | ((
          parent: Campaign,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Array<Reward | null> | null | Promise<Array<Reward | null> | null>)
      | {
          fragment: string;
          resolve: (
            parent: Campaign,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Reward | null>
            | null
            | Promise<Array<Reward | null> | null>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => (parent.id === undefined ? null : parent.id),
    name: (parent: User) => (parent.name === undefined ? null : parent.name),
    email: (parent: User) => (parent.email === undefined ? null : parent.email),
    avatar: (parent: User) =>
      parent.avatar === undefined ? null : parent.avatar,
    Status: (parent: User) =>
      parent.Status === undefined ? null : parent.Status,
    Role: (parent: User) => (parent.Role === undefined ? null : parent.Role)
  };

  export type IdResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type NameResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type EmailResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type AvatarResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type StatusResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type RoleResolver =
    | ((
        parent: User,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export interface Type {
    id:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    name:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    email:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    avatar:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    Status:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    Role:
      | ((
          parent: User,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: User,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };
  }
}

export namespace WithdrawalResolvers {
  export const defaultResolvers = {
    id: (parent: Withdrawal) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Withdrawal,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Withdrawal,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CampaignResolver =
    | ((
        parent: Withdrawal,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Campaign | null | Promise<Campaign | null>)
    | {
        fragment: string;
        resolve: (
          parent: Withdrawal,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Withdrawal,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Withdrawal,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    Campaign:
      | ((
          parent: Withdrawal,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>)
      | {
          fragment: string;
          resolve: (
            parent: Withdrawal,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Campaign | null | Promise<Campaign | null>;
        };
  }
}

export namespace LikeResolvers {
  export const defaultResolvers = {
    id: (parent: Like) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Like,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type UserResolver =
    | ((
        parent: Like,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export type ImagesResolver =
    | ((
        parent: Like,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Campaign | null>
        | null
        | Promise<Array<Campaign | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Like,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    user:
      | ((
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: Like,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };

    images:
      | ((
          parent: Like,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: Like,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Campaign | null>
            | null
            | Promise<Array<Campaign | null> | null>;
        };
  }
}

export namespace DonationResolvers {
  export const defaultResolvers = {
    id: (parent: Donation) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Donation,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CampaignResolver =
    | ((
        parent: Donation,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Campaign | null | Promise<Campaign | null>)
    | {
        fragment: string;
        resolve: (
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>;
      };

  export type RewardResolver =
    | ((
        parent: Donation,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Reward | null | Promise<Reward | null>)
    | {
        fragment: string;
        resolve: (
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Reward | null | Promise<Reward | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Donation,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    Campaign:
      | ((
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>)
      | {
          fragment: string;
          resolve: (
            parent: Donation,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Campaign | null | Promise<Campaign | null>;
        };

    Reward:
      | ((
          parent: Donation,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Reward | null | Promise<Reward | null>)
      | {
          fragment: string;
          resolve: (
            parent: Donation,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Reward | null | Promise<Reward | null>;
        };
  }
}

export namespace RewardResolvers {
  export const defaultResolvers = {
    id: (parent: Reward) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Reward,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CampaignResolver =
    | ((
        parent: Reward,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Campaign | null | Promise<Campaign | null>)
    | {
        fragment: string;
        resolve: (
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>;
      };

  export type DonationsResolver =
    | ((
        parent: Reward,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Donation | null>
        | null
        | Promise<Array<Donation | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Reward,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    campaign:
      | ((
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>)
      | {
          fragment: string;
          resolve: (
            parent: Reward,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Campaign | null | Promise<Campaign | null>;
        };

    donations:
      | ((
          parent: Reward,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Donation | null>
          | null
          | Promise<Array<Donation | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: Reward,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Donation | null>
            | null
            | Promise<Array<Donation | null> | null>;
        };
  }
}

export namespace UpdateResolvers {
  export const defaultResolvers = {
    id: (parent: Update) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Update,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Update,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CampaignResolver =
    | ((
        parent: Update,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => Campaign | null | Promise<Campaign | null>)
    | {
        fragment: string;
        resolve: (
          parent: Update,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Update,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Update,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    campaign:
      | ((
          parent: Update,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => Campaign | null | Promise<Campaign | null>)
      | {
          fragment: string;
          resolve: (
            parent: Update,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => Campaign | null | Promise<Campaign | null>;
        };
  }
}

export namespace CategoryResolvers {
  export const defaultResolvers = {
    id: (parent: Category) => (parent.id === undefined ? null : parent.id)
  };

  export type IdResolver =
    | ((
        parent: Category,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type CampaignsResolver =
    | ((
        parent: Category,
        args: {},
        ctx: Context,
        info: GraphQLResolveInfo
      ) =>
        | Array<Campaign | null>
        | null
        | Promise<Array<Campaign | null> | null>
      )
    | {
        fragment: string;
        resolve: (
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>;
      };

  export interface Type {
    id:
      | ((
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: Category,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    Campaigns:
      | ((
          parent: Category,
          args: {},
          ctx: Context,
          info: GraphQLResolveInfo
        ) =>
          | Array<Campaign | null>
          | null
          | Promise<Array<Campaign | null> | null>
        )
      | {
          fragment: string;
          resolve: (
            parent: Category,
            args: {},
            ctx: Context,
            info: GraphQLResolveInfo
          ) =>
            | Array<Campaign | null>
            | null
            | Promise<Array<Campaign | null> | null>;
        };
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsLogin {
    email: string;
    password: string;
  }

  export interface ArgsSignup {
    email: string;
    password: string;
    name: string;
  }

  export type LoginResolver =
    | ((
        parent: undefined,
        args: ArgsLogin,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => string | null | Promise<string | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>;
      };

  export type SignupResolver =
    | ((
        parent: undefined,
        args: ArgsSignup,
        ctx: Context,
        info: GraphQLResolveInfo
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>;
      };

  export interface Type {
    login:
      | ((
          parent: undefined,
          args: ArgsLogin,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => string | null | Promise<string | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsLogin,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => string | null | Promise<string | null>;
        };

    signup:
      | ((
          parent: undefined,
          args: ArgsSignup,
          ctx: Context,
          info: GraphQLResolveInfo
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsSignup,
            ctx: Context,
            info: GraphQLResolveInfo
          ) => User | null | Promise<User | null>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Campaign: CampaignResolvers.Type;
  User: UserResolvers.Type;
  Withdrawal: WithdrawalResolvers.Type;
  Like: LikeResolvers.Type;
  Donation: DonationResolvers.Type;
  Reward: RewardResolvers.Type;
  Update: UpdateResolvers.Type;
  Category: CategoryResolvers.Type;
  Mutation: MutationResolvers.Type;
}

// @ts-ignore
declare module "graphql-tools" {
  interface IResolvers extends Resolvers {}
}

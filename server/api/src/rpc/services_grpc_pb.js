// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var models_campaign_pb = require('./models/campaign_pb.js');
var models_withdrawal_pb = require('./models/withdrawal_pb.js');
var models_donation_pb = require('./models/donation_pb.js');
var models_reward_pb = require('./models/reward_pb.js');
var models_user_pb = require('./models/user_pb.js');
var common_pb = require('./common_pb.js');

function serialize_models_Campaign(arg) {
  if (!(arg instanceof models_campaign_pb.Campaign)) {
    throw new Error('Expected argument of type models.Campaign');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_Campaign(buffer_arg) {
  return models_campaign_pb.Campaign.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_CampaignList(arg) {
  if (!(arg instanceof models_campaign_pb.CampaignList)) {
    throw new Error('Expected argument of type models.CampaignList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_CampaignList(buffer_arg) {
  return models_campaign_pb.CampaignList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_Donation(arg) {
  if (!(arg instanceof models_donation_pb.Donation)) {
    throw new Error('Expected argument of type models.Donation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_Donation(buffer_arg) {
  return models_donation_pb.Donation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_Reward(arg) {
  if (!(arg instanceof models_reward_pb.Reward)) {
    throw new Error('Expected argument of type models.Reward');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_Reward(buffer_arg) {
  return models_reward_pb.Reward.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_User(arg) {
  if (!(arg instanceof models_user_pb.User)) {
    throw new Error('Expected argument of type models.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_User(buffer_arg) {
  return models_user_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_Withdrawal(arg) {
  if (!(arg instanceof models_withdrawal_pb.Withdrawal)) {
    throw new Error('Expected argument of type models.Withdrawal');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_Withdrawal(buffer_arg) {
  return models_withdrawal_pb.Withdrawal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_models_WithdrawalList(arg) {
  if (!(arg instanceof models_withdrawal_pb.WithdrawalList)) {
    throw new Error('Expected argument of type models.WithdrawalList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_models_WithdrawalList(buffer_arg) {
  return models_withdrawal_pb.WithdrawalList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_ConfigureWithdrawalRequest(arg) {
  if (!(arg instanceof common_pb.ConfigureWithdrawalRequest)) {
    throw new Error('Expected argument of type service.ConfigureWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_ConfigureWithdrawalRequest(buffer_arg) {
  return common_pb.ConfigureWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_CreateRewardRequest(arg) {
  if (!(arg instanceof common_pb.CreateRewardRequest)) {
    throw new Error('Expected argument of type service.CreateRewardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_CreateRewardRequest(buffer_arg) {
  return common_pb.CreateRewardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_DeleteCampaignRequest(arg) {
  if (!(arg instanceof common_pb.DeleteCampaignRequest)) {
    throw new Error('Expected argument of type service.DeleteCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_DeleteCampaignRequest(buffer_arg) {
  return common_pb.DeleteCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_DeleteUserRequest(arg) {
  if (!(arg instanceof common_pb.DeleteUserRequest)) {
    throw new Error('Expected argument of type service.DeleteUserRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_DeleteUserRequest(buffer_arg) {
  return common_pb.DeleteUserRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_DeleteWithdrawalRequest(arg) {
  if (!(arg instanceof common_pb.DeleteWithdrawalRequest)) {
    throw new Error('Expected argument of type service.DeleteWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_DeleteWithdrawalRequest(buffer_arg) {
  return common_pb.DeleteWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_DestroyRewardRequest(arg) {
  if (!(arg instanceof common_pb.DestroyRewardRequest)) {
    throw new Error('Expected argument of type service.DestroyRewardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_DestroyRewardRequest(buffer_arg) {
  return common_pb.DestroyRewardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_FindAllCampaignsRequest(arg) {
  if (!(arg instanceof common_pb.FindAllCampaignsRequest)) {
    throw new Error('Expected argument of type service.FindAllCampaignsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_FindAllCampaignsRequest(buffer_arg) {
  return common_pb.FindAllCampaignsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_FindDonationRequest(arg) {
  if (!(arg instanceof common_pb.FindDonationRequest)) {
    throw new Error('Expected argument of type service.FindDonationRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_FindDonationRequest(buffer_arg) {
  return common_pb.FindDonationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_FindWithdrawalRequest(arg) {
  if (!(arg instanceof common_pb.FindWithdrawalRequest)) {
    throw new Error('Expected argument of type service.FindWithdrawalRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_FindWithdrawalRequest(buffer_arg) {
  return common_pb.FindWithdrawalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_FindWithdrawalsRequest(arg) {
  if (!(arg instanceof common_pb.FindWithdrawalsRequest)) {
    throw new Error('Expected argument of type service.FindWithdrawalsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_FindWithdrawalsRequest(buffer_arg) {
  return common_pb.FindWithdrawalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_GetAccountDetailsRequest(arg) {
  if (!(arg instanceof common_pb.GetAccountDetailsRequest)) {
    throw new Error('Expected argument of type service.GetAccountDetailsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_GetAccountDetailsRequest(buffer_arg) {
  return common_pb.GetAccountDetailsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_LikesRequest(arg) {
  if (!(arg instanceof common_pb.LikesRequest)) {
    throw new Error('Expected argument of type service.LikesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_LikesRequest(buffer_arg) {
  return common_pb.LikesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_PostUpdateRequest(arg) {
  if (!(arg instanceof common_pb.PostUpdateRequest)) {
    throw new Error('Expected argument of type service.PostUpdateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_PostUpdateRequest(buffer_arg) {
  return common_pb.PostUpdateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_SendEmailRequest(arg) {
  if (!(arg instanceof common_pb.SendEmailRequest)) {
    throw new Error('Expected argument of type service.SendEmailRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_SendEmailRequest(buffer_arg) {
  return common_pb.SendEmailRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_SendRequest(arg) {
  if (!(arg instanceof common_pb.SendRequest)) {
    throw new Error('Expected argument of type service.SendRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_SendRequest(buffer_arg) {
  return common_pb.SendRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_UpdateCampaignRequest(arg) {
  if (!(arg instanceof common_pb.UpdateCampaignRequest)) {
    throw new Error('Expected argument of type service.UpdateCampaignRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_UpdateCampaignRequest(buffer_arg) {
  return common_pb.UpdateCampaignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_service_UpdateRewardRequest(arg) {
  if (!(arg instanceof common_pb.UpdateRewardRequest)) {
    throw new Error('Expected argument of type service.UpdateRewardRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_service_UpdateRewardRequest(buffer_arg) {
  return common_pb.UpdateRewardRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var CampaignService = exports.CampaignService = {
  findAll: {
    path: '/service.Campaign/FindAll',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.FindAllCampaignsRequest,
    responseType: models_campaign_pb.CampaignList,
    requestSerialize: serialize_service_FindAllCampaignsRequest,
    requestDeserialize: deserialize_service_FindAllCampaignsRequest,
    responseSerialize: serialize_models_CampaignList,
    responseDeserialize: deserialize_models_CampaignList,
  },
  findWithdrawal: {
    path: '/service.Campaign/FindWithdrawal',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.FindWithdrawalRequest,
    responseType: models_withdrawal_pb.Withdrawal,
    requestSerialize: serialize_service_FindWithdrawalRequest,
    requestDeserialize: deserialize_service_FindWithdrawalRequest,
    responseSerialize: serialize_models_Withdrawal,
    responseDeserialize: deserialize_models_Withdrawal,
  },
  findWithdrawals: {
    path: '/service.Campaign/FindWithdrawals',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.FindWithdrawalsRequest,
    responseType: models_withdrawal_pb.WithdrawalList,
    requestSerialize: serialize_service_FindWithdrawalsRequest,
    requestDeserialize: deserialize_service_FindWithdrawalsRequest,
    responseSerialize: serialize_models_WithdrawalList,
    responseDeserialize: deserialize_models_WithdrawalList,
  },
  configureWithdrawal: {
    path: '/service.Campaign/ConfigureWithdrawal',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.ConfigureWithdrawalRequest,
    responseType: models_withdrawal_pb.Withdrawal,
    requestSerialize: serialize_service_ConfigureWithdrawalRequest,
    requestDeserialize: deserialize_service_ConfigureWithdrawalRequest,
    responseSerialize: serialize_models_Withdrawal,
    responseDeserialize: deserialize_models_Withdrawal,
  },
  deleteWithdrawal: {
    path: '/service.Campaign/DeleteWithdrawal',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.DeleteWithdrawalRequest,
    responseType: models_withdrawal_pb.Withdrawal,
    requestSerialize: serialize_service_DeleteWithdrawalRequest,
    requestDeserialize: deserialize_service_DeleteWithdrawalRequest,
    responseSerialize: serialize_models_Withdrawal,
    responseDeserialize: deserialize_models_Withdrawal,
  },
  update: {
    path: '/service.Campaign/Update',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.UpdateCampaignRequest,
    responseType: models_campaign_pb.Campaign,
    requestSerialize: serialize_service_UpdateCampaignRequest,
    requestDeserialize: deserialize_service_UpdateCampaignRequest,
    responseSerialize: serialize_models_Campaign,
    responseDeserialize: deserialize_models_Campaign,
  },
  delete: {
    path: '/service.Campaign/Delete',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.DeleteCampaignRequest,
    responseType: models_campaign_pb.Campaign,
    requestSerialize: serialize_service_DeleteCampaignRequest,
    requestDeserialize: deserialize_service_DeleteCampaignRequest,
    responseSerialize: serialize_models_Campaign,
    responseDeserialize: deserialize_models_Campaign,
  },
  postUpdate: {
    path: '/service.Campaign/PostUpdate',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PostUpdateRequest,
    responseType: models_campaign_pb.Campaign,
    requestSerialize: serialize_service_PostUpdateRequest,
    requestDeserialize: deserialize_service_PostUpdateRequest,
    responseSerialize: serialize_models_Campaign,
    responseDeserialize: deserialize_models_Campaign,
  },
};

exports.CampaignClient = grpc.makeGenericClientConstructor(CampaignService);
var DonationService = exports.DonationService = {
  send: {
    path: '/service.Donation/Send',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.SendRequest,
    responseType: models_donation_pb.Donation,
    requestSerialize: serialize_service_SendRequest,
    requestDeserialize: deserialize_service_SendRequest,
    responseSerialize: serialize_models_Donation,
    responseDeserialize: deserialize_models_Donation,
  },
  sendEmail: {
    path: '/service.Donation/SendEmail',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.SendEmailRequest,
    responseType: models_donation_pb.Donation,
    requestSerialize: serialize_service_SendEmailRequest,
    requestDeserialize: deserialize_service_SendEmailRequest,
    responseSerialize: serialize_models_Donation,
    responseDeserialize: deserialize_models_Donation,
  },
  find: {
    path: '/service.Donation/Find',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.FindDonationRequest,
    responseType: models_donation_pb.Donation,
    requestSerialize: serialize_service_FindDonationRequest,
    requestDeserialize: deserialize_service_FindDonationRequest,
    responseSerialize: serialize_models_Donation,
    responseDeserialize: deserialize_models_Donation,
  },
};

exports.DonationClient = grpc.makeGenericClientConstructor(DonationService);
var RewardService = exports.RewardService = {
  create: {
    path: '/service.Reward/Create',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.CreateRewardRequest,
    responseType: models_reward_pb.Reward,
    requestSerialize: serialize_service_CreateRewardRequest,
    requestDeserialize: deserialize_service_CreateRewardRequest,
    responseSerialize: serialize_models_Reward,
    responseDeserialize: deserialize_models_Reward,
  },
  destroy: {
    path: '/service.Reward/Destroy',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.DestroyRewardRequest,
    responseType: models_reward_pb.Reward,
    requestSerialize: serialize_service_DestroyRewardRequest,
    requestDeserialize: deserialize_service_DestroyRewardRequest,
    responseSerialize: serialize_models_Reward,
    responseDeserialize: deserialize_models_Reward,
  },
  update: {
    path: '/service.Reward/Update',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.UpdateRewardRequest,
    responseType: models_reward_pb.Reward,
    requestSerialize: serialize_service_UpdateRewardRequest,
    requestDeserialize: deserialize_service_UpdateRewardRequest,
    responseSerialize: serialize_models_Reward,
    responseDeserialize: deserialize_models_Reward,
  },
};

exports.RewardClient = grpc.makeGenericClientConstructor(RewardService);
var UserService = exports.UserService = {
  getAccountDetails: {
    path: '/service.User/GetAccountDetails',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.GetAccountDetailsRequest,
    responseType: models_user_pb.User,
    requestSerialize: serialize_service_GetAccountDetailsRequest,
    requestDeserialize: deserialize_service_GetAccountDetailsRequest,
    responseSerialize: serialize_models_User,
    responseDeserialize: deserialize_models_User,
  },
  delete: {
    path: '/service.User/Delete',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.DeleteUserRequest,
    responseType: models_user_pb.User,
    requestSerialize: serialize_service_DeleteUserRequest,
    requestDeserialize: deserialize_service_DeleteUserRequest,
    responseSerialize: serialize_models_User,
    responseDeserialize: deserialize_models_User,
  },
  likes: {
    path: '/service.User/Likes',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.LikesRequest,
    responseType: models_campaign_pb.CampaignList,
    requestSerialize: serialize_service_LikesRequest,
    requestDeserialize: deserialize_service_LikesRequest,
    responseSerialize: serialize_models_CampaignList,
    responseDeserialize: deserialize_models_CampaignList,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);

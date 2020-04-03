// package: service
// file: services.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as services_pb from "./services_pb";
import * as models_campaign_pb from "./models/campaign_pb";
import * as models_withdrawal_pb from "./models/withdrawal_pb";
import * as models_donation_pb from "./models/donation_pb";
import * as models_reward_pb from "./models/reward_pb";
import * as models_user_pb from "./models/user_pb";
import * as common_pb from "./common_pb";

interface ICampaignService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    findAll: ICampaignService_IFindAll;
    findWithdrawal: ICampaignService_IFindWithdrawal;
    findWithdrawals: ICampaignService_IFindWithdrawals;
    configureWithdrawal: ICampaignService_IConfigureWithdrawal;
    deleteWithdrawal: ICampaignService_IDeleteWithdrawal;
    update: ICampaignService_IUpdate;
    delete: ICampaignService_IDelete;
    postUpdate: ICampaignService_IPostUpdate;
}

interface ICampaignService_IFindAll extends grpc.MethodDefinition<common_pb.FindAllCampaignsRequest, models_campaign_pb.CampaignList> {
    path: string; // "/service.Campaign/FindAll"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.FindAllCampaignsRequest>;
    requestDeserialize: grpc.deserialize<common_pb.FindAllCampaignsRequest>;
    responseSerialize: grpc.serialize<models_campaign_pb.CampaignList>;
    responseDeserialize: grpc.deserialize<models_campaign_pb.CampaignList>;
}
interface ICampaignService_IFindWithdrawal extends grpc.MethodDefinition<common_pb.FindWithdrawalRequest, models_withdrawal_pb.Withdrawal> {
    path: string; // "/service.Campaign/FindWithdrawal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.FindWithdrawalRequest>;
    requestDeserialize: grpc.deserialize<common_pb.FindWithdrawalRequest>;
    responseSerialize: grpc.serialize<models_withdrawal_pb.Withdrawal>;
    responseDeserialize: grpc.deserialize<models_withdrawal_pb.Withdrawal>;
}
interface ICampaignService_IFindWithdrawals extends grpc.MethodDefinition<common_pb.FindWithdrawalsRequest, models_withdrawal_pb.WithdrawalList> {
    path: string; // "/service.Campaign/FindWithdrawals"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.FindWithdrawalsRequest>;
    requestDeserialize: grpc.deserialize<common_pb.FindWithdrawalsRequest>;
    responseSerialize: grpc.serialize<models_withdrawal_pb.WithdrawalList>;
    responseDeserialize: grpc.deserialize<models_withdrawal_pb.WithdrawalList>;
}
interface ICampaignService_IConfigureWithdrawal extends grpc.MethodDefinition<common_pb.ConfigureWithdrawalRequest, models_withdrawal_pb.Withdrawal> {
    path: string; // "/service.Campaign/ConfigureWithdrawal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.ConfigureWithdrawalRequest>;
    requestDeserialize: grpc.deserialize<common_pb.ConfigureWithdrawalRequest>;
    responseSerialize: grpc.serialize<models_withdrawal_pb.Withdrawal>;
    responseDeserialize: grpc.deserialize<models_withdrawal_pb.Withdrawal>;
}
interface ICampaignService_IDeleteWithdrawal extends grpc.MethodDefinition<common_pb.DeleteWithdrawalRequest, models_withdrawal_pb.Withdrawal> {
    path: string; // "/service.Campaign/DeleteWithdrawal"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.DeleteWithdrawalRequest>;
    requestDeserialize: grpc.deserialize<common_pb.DeleteWithdrawalRequest>;
    responseSerialize: grpc.serialize<models_withdrawal_pb.Withdrawal>;
    responseDeserialize: grpc.deserialize<models_withdrawal_pb.Withdrawal>;
}
interface ICampaignService_IUpdate extends grpc.MethodDefinition<common_pb.UpdateCampaignRequest, models_campaign_pb.Campaign> {
    path: string; // "/service.Campaign/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.UpdateCampaignRequest>;
    requestDeserialize: grpc.deserialize<common_pb.UpdateCampaignRequest>;
    responseSerialize: grpc.serialize<models_campaign_pb.Campaign>;
    responseDeserialize: grpc.deserialize<models_campaign_pb.Campaign>;
}
interface ICampaignService_IDelete extends grpc.MethodDefinition<common_pb.DeleteCampaignRequest, models_campaign_pb.Campaign> {
    path: string; // "/service.Campaign/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.DeleteCampaignRequest>;
    requestDeserialize: grpc.deserialize<common_pb.DeleteCampaignRequest>;
    responseSerialize: grpc.serialize<models_campaign_pb.Campaign>;
    responseDeserialize: grpc.deserialize<models_campaign_pb.Campaign>;
}
interface ICampaignService_IPostUpdate extends grpc.MethodDefinition<common_pb.PostUpdateRequest, models_campaign_pb.Campaign> {
    path: string; // "/service.Campaign/PostUpdate"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.PostUpdateRequest>;
    requestDeserialize: grpc.deserialize<common_pb.PostUpdateRequest>;
    responseSerialize: grpc.serialize<models_campaign_pb.Campaign>;
    responseDeserialize: grpc.deserialize<models_campaign_pb.Campaign>;
}

export const CampaignService: ICampaignService;

export interface ICampaignServer {
    findAll: grpc.handleUnaryCall<common_pb.FindAllCampaignsRequest, models_campaign_pb.CampaignList>;
    findWithdrawal: grpc.handleUnaryCall<common_pb.FindWithdrawalRequest, models_withdrawal_pb.Withdrawal>;
    findWithdrawals: grpc.handleUnaryCall<common_pb.FindWithdrawalsRequest, models_withdrawal_pb.WithdrawalList>;
    configureWithdrawal: grpc.handleUnaryCall<common_pb.ConfigureWithdrawalRequest, models_withdrawal_pb.Withdrawal>;
    deleteWithdrawal: grpc.handleUnaryCall<common_pb.DeleteWithdrawalRequest, models_withdrawal_pb.Withdrawal>;
    update: grpc.handleUnaryCall<common_pb.UpdateCampaignRequest, models_campaign_pb.Campaign>;
    delete: grpc.handleUnaryCall<common_pb.DeleteCampaignRequest, models_campaign_pb.Campaign>;
    postUpdate: grpc.handleUnaryCall<common_pb.PostUpdateRequest, models_campaign_pb.Campaign>;
}

export interface ICampaignClient {
    findAll(request: common_pb.FindAllCampaignsRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.FindAllCampaignsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    findAll(request: common_pb.FindAllCampaignsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    findWithdrawal(request: common_pb.FindWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    findWithdrawal(request: common_pb.FindWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    findWithdrawal(request: common_pb.FindWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    findWithdrawals(request: common_pb.FindWithdrawalsRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    findWithdrawals(request: common_pb.FindWithdrawalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    findWithdrawals(request: common_pb.FindWithdrawalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateCampaignRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteCampaignRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    postUpdate(request: common_pb.PostUpdateRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    postUpdate(request: common_pb.PostUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    postUpdate(request: common_pb.PostUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
}

export class CampaignClient extends grpc.Client implements ICampaignClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public findAll(request: common_pb.FindAllCampaignsRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.FindAllCampaignsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    public findAll(request: common_pb.FindAllCampaignsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    public findWithdrawal(request: common_pb.FindWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public findWithdrawal(request: common_pb.FindWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public findWithdrawal(request: common_pb.FindWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public findWithdrawals(request: common_pb.FindWithdrawalsRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    public findWithdrawals(request: common_pb.FindWithdrawalsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    public findWithdrawals(request: common_pb.FindWithdrawalsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.WithdrawalList) => void): grpc.ClientUnaryCall;
    public configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public configureWithdrawal(request: common_pb.ConfigureWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public deleteWithdrawal(request: common_pb.DeleteWithdrawalRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_withdrawal_pb.Withdrawal) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateCampaignRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteCampaignRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteCampaignRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteCampaignRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public postUpdate(request: common_pb.PostUpdateRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public postUpdate(request: common_pb.PostUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
    public postUpdate(request: common_pb.PostUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.Campaign) => void): grpc.ClientUnaryCall;
}

interface IDonationService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    send: IDonationService_ISend;
    sendEmail: IDonationService_ISendEmail;
    find: IDonationService_IFind;
}

interface IDonationService_ISend extends grpc.MethodDefinition<common_pb.SendRequest, models_donation_pb.Donation> {
    path: string; // "/service.Donation/Send"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.SendRequest>;
    requestDeserialize: grpc.deserialize<common_pb.SendRequest>;
    responseSerialize: grpc.serialize<models_donation_pb.Donation>;
    responseDeserialize: grpc.deserialize<models_donation_pb.Donation>;
}
interface IDonationService_ISendEmail extends grpc.MethodDefinition<common_pb.SendEmailRequest, models_donation_pb.Donation> {
    path: string; // "/service.Donation/SendEmail"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.SendEmailRequest>;
    requestDeserialize: grpc.deserialize<common_pb.SendEmailRequest>;
    responseSerialize: grpc.serialize<models_donation_pb.Donation>;
    responseDeserialize: grpc.deserialize<models_donation_pb.Donation>;
}
interface IDonationService_IFind extends grpc.MethodDefinition<common_pb.FindDonationRequest, models_donation_pb.Donation> {
    path: string; // "/service.Donation/Find"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.FindDonationRequest>;
    requestDeserialize: grpc.deserialize<common_pb.FindDonationRequest>;
    responseSerialize: grpc.serialize<models_donation_pb.Donation>;
    responseDeserialize: grpc.deserialize<models_donation_pb.Donation>;
}

export const DonationService: IDonationService;

export interface IDonationServer {
    send: grpc.handleUnaryCall<common_pb.SendRequest, models_donation_pb.Donation>;
    sendEmail: grpc.handleUnaryCall<common_pb.SendEmailRequest, models_donation_pb.Donation>;
    find: grpc.handleUnaryCall<common_pb.FindDonationRequest, models_donation_pb.Donation>;
}

export interface IDonationClient {
    send(request: common_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    send(request: common_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    send(request: common_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    sendEmail(request: common_pb.SendEmailRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    sendEmail(request: common_pb.SendEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    sendEmail(request: common_pb.SendEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    find(request: common_pb.FindDonationRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    find(request: common_pb.FindDonationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    find(request: common_pb.FindDonationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
}

export class DonationClient extends grpc.Client implements IDonationClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public send(request: common_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public send(request: common_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public send(request: common_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public sendEmail(request: common_pb.SendEmailRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public sendEmail(request: common_pb.SendEmailRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public sendEmail(request: common_pb.SendEmailRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public find(request: common_pb.FindDonationRequest, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public find(request: common_pb.FindDonationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
    public find(request: common_pb.FindDonationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_donation_pb.Donation) => void): grpc.ClientUnaryCall;
}

interface IRewardService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IRewardService_ICreate;
    destroy: IRewardService_IDestroy;
    update: IRewardService_IUpdate;
}

interface IRewardService_ICreate extends grpc.MethodDefinition<common_pb.CreateRewardRequest, models_reward_pb.Reward> {
    path: string; // "/service.Reward/Create"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.CreateRewardRequest>;
    requestDeserialize: grpc.deserialize<common_pb.CreateRewardRequest>;
    responseSerialize: grpc.serialize<models_reward_pb.Reward>;
    responseDeserialize: grpc.deserialize<models_reward_pb.Reward>;
}
interface IRewardService_IDestroy extends grpc.MethodDefinition<common_pb.DestroyRewardRequest, models_reward_pb.Reward> {
    path: string; // "/service.Reward/Destroy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.DestroyRewardRequest>;
    requestDeserialize: grpc.deserialize<common_pb.DestroyRewardRequest>;
    responseSerialize: grpc.serialize<models_reward_pb.Reward>;
    responseDeserialize: grpc.deserialize<models_reward_pb.Reward>;
}
interface IRewardService_IUpdate extends grpc.MethodDefinition<common_pb.UpdateRewardRequest, models_reward_pb.Reward> {
    path: string; // "/service.Reward/Update"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.UpdateRewardRequest>;
    requestDeserialize: grpc.deserialize<common_pb.UpdateRewardRequest>;
    responseSerialize: grpc.serialize<models_reward_pb.Reward>;
    responseDeserialize: grpc.deserialize<models_reward_pb.Reward>;
}

export const RewardService: IRewardService;

export interface IRewardServer {
    create: grpc.handleUnaryCall<common_pb.CreateRewardRequest, models_reward_pb.Reward>;
    destroy: grpc.handleUnaryCall<common_pb.DestroyRewardRequest, models_reward_pb.Reward>;
    update: grpc.handleUnaryCall<common_pb.UpdateRewardRequest, models_reward_pb.Reward>;
}

export interface IRewardClient {
    create(request: common_pb.CreateRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    create(request: common_pb.CreateRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    create(request: common_pb.CreateRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    destroy(request: common_pb.DestroyRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    destroy(request: common_pb.DestroyRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    destroy(request: common_pb.DestroyRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    update(request: common_pb.UpdateRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
}

export class RewardClient extends grpc.Client implements IRewardClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: common_pb.CreateRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public create(request: common_pb.CreateRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public create(request: common_pb.CreateRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public destroy(request: common_pb.DestroyRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public destroy(request: common_pb.DestroyRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public destroy(request: common_pb.DestroyRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateRewardRequest, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateRewardRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
    public update(request: common_pb.UpdateRewardRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_reward_pb.Reward) => void): grpc.ClientUnaryCall;
}

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getAccountDetails: IUserService_IGetAccountDetails;
    delete: IUserService_IDelete;
    likes: IUserService_ILikes;
}

interface IUserService_IGetAccountDetails extends grpc.MethodDefinition<common_pb.GetAccountDetailsRequest, models_user_pb.User> {
    path: string; // "/service.User/GetAccountDetails"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.GetAccountDetailsRequest>;
    requestDeserialize: grpc.deserialize<common_pb.GetAccountDetailsRequest>;
    responseSerialize: grpc.serialize<models_user_pb.User>;
    responseDeserialize: grpc.deserialize<models_user_pb.User>;
}
interface IUserService_IDelete extends grpc.MethodDefinition<common_pb.DeleteUserRequest, models_user_pb.User> {
    path: string; // "/service.User/Delete"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.DeleteUserRequest>;
    requestDeserialize: grpc.deserialize<common_pb.DeleteUserRequest>;
    responseSerialize: grpc.serialize<models_user_pb.User>;
    responseDeserialize: grpc.deserialize<models_user_pb.User>;
}
interface IUserService_ILikes extends grpc.MethodDefinition<common_pb.LikesRequest, models_campaign_pb.CampaignList> {
    path: string; // "/service.User/Likes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<common_pb.LikesRequest>;
    requestDeserialize: grpc.deserialize<common_pb.LikesRequest>;
    responseSerialize: grpc.serialize<models_campaign_pb.CampaignList>;
    responseDeserialize: grpc.deserialize<models_campaign_pb.CampaignList>;
}

export const UserService: IUserService;

export interface IUserServer {
    getAccountDetails: grpc.handleUnaryCall<common_pb.GetAccountDetailsRequest, models_user_pb.User>;
    delete: grpc.handleUnaryCall<common_pb.DeleteUserRequest, models_user_pb.User>;
    likes: grpc.handleUnaryCall<common_pb.LikesRequest, models_campaign_pb.CampaignList>;
}

export interface IUserClient {
    getAccountDetails(request: common_pb.GetAccountDetailsRequest, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    getAccountDetails(request: common_pb.GetAccountDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    getAccountDetails(request: common_pb.GetAccountDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    delete(request: common_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    likes(request: common_pb.LikesRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    likes(request: common_pb.LikesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    likes(request: common_pb.LikesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getAccountDetails(request: common_pb.GetAccountDetailsRequest, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public getAccountDetails(request: common_pb.GetAccountDetailsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public getAccountDetails(request: common_pb.GetAccountDetailsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteUserRequest, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteUserRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public delete(request: common_pb.DeleteUserRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_user_pb.User) => void): grpc.ClientUnaryCall;
    public likes(request: common_pb.LikesRequest, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    public likes(request: common_pb.LikesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
    public likes(request: common_pb.LikesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: models_campaign_pb.CampaignList) => void): grpc.ClientUnaryCall;
}

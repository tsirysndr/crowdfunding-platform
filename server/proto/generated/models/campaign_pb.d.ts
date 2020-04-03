// package: models
// file: models/campaign.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Campaign extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Campaign.AsObject;
    static toObject(includeInstance: boolean, msg: Campaign): Campaign.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Campaign, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Campaign;
    static deserializeBinaryFromReader(message: Campaign, reader: jspb.BinaryReader): Campaign;
}

export namespace Campaign {
    export type AsObject = {
        id: string,
    }
}

export class CampaignList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Campaign>;
    setItemsList(value: Array<Campaign>): void;
    addItems(value?: Campaign, index?: number): Campaign;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CampaignList.AsObject;
    static toObject(includeInstance: boolean, msg: CampaignList): CampaignList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CampaignList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CampaignList;
    static deserializeBinaryFromReader(message: CampaignList, reader: jspb.BinaryReader): CampaignList;
}

export namespace CampaignList {
    export type AsObject = {
        itemsList: Array<Campaign.AsObject>,
    }
}

// package: models
// file: models/reward.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Reward extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reward.AsObject;
    static toObject(includeInstance: boolean, msg: Reward): Reward.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reward, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reward;
    static deserializeBinaryFromReader(message: Reward, reader: jspb.BinaryReader): Reward;
}

export namespace Reward {
    export type AsObject = {
        id: string,
    }
}

export class RewardList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Reward>;
    setItemsList(value: Array<Reward>): void;
    addItems(value?: Reward, index?: number): Reward;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RewardList.AsObject;
    static toObject(includeInstance: boolean, msg: RewardList): RewardList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RewardList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RewardList;
    static deserializeBinaryFromReader(message: RewardList, reader: jspb.BinaryReader): RewardList;
}

export namespace RewardList {
    export type AsObject = {
        itemsList: Array<Reward.AsObject>,
    }
}

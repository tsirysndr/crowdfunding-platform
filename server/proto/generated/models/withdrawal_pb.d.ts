// package: models
// file: models/withdrawal.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Withdrawal extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Withdrawal.AsObject;
    static toObject(includeInstance: boolean, msg: Withdrawal): Withdrawal.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Withdrawal, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Withdrawal;
    static deserializeBinaryFromReader(message: Withdrawal, reader: jspb.BinaryReader): Withdrawal;
}

export namespace Withdrawal {
    export type AsObject = {
        id: string,
    }
}

export class WithdrawalList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Withdrawal>;
    setItemsList(value: Array<Withdrawal>): void;
    addItems(value?: Withdrawal, index?: number): Withdrawal;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WithdrawalList.AsObject;
    static toObject(includeInstance: boolean, msg: WithdrawalList): WithdrawalList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WithdrawalList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WithdrawalList;
    static deserializeBinaryFromReader(message: WithdrawalList, reader: jspb.BinaryReader): WithdrawalList;
}

export namespace WithdrawalList {
    export type AsObject = {
        itemsList: Array<Withdrawal.AsObject>,
    }
}

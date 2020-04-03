// package: models
// file: models/donation.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Donation extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Donation.AsObject;
    static toObject(includeInstance: boolean, msg: Donation): Donation.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Donation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Donation;
    static deserializeBinaryFromReader(message: Donation, reader: jspb.BinaryReader): Donation;
}

export namespace Donation {
    export type AsObject = {
        id: string,
    }
}

export class DonationList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Donation>;
    setItemsList(value: Array<Donation>): void;
    addItems(value?: Donation, index?: number): Donation;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DonationList.AsObject;
    static toObject(includeInstance: boolean, msg: DonationList): DonationList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DonationList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DonationList;
    static deserializeBinaryFromReader(message: DonationList, reader: jspb.BinaryReader): DonationList;
}

export namespace DonationList {
    export type AsObject = {
        itemsList: Array<Donation.AsObject>,
    }
}

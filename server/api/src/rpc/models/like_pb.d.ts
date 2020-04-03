// package: models
// file: models/like.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Like extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Like.AsObject;
    static toObject(includeInstance: boolean, msg: Like): Like.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Like, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Like;
    static deserializeBinaryFromReader(message: Like, reader: jspb.BinaryReader): Like;
}

export namespace Like {
    export type AsObject = {
        id: string,
    }
}

export class LikeList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Like>;
    setItemsList(value: Array<Like>): void;
    addItems(value?: Like, index?: number): Like;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LikeList.AsObject;
    static toObject(includeInstance: boolean, msg: LikeList): LikeList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LikeList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LikeList;
    static deserializeBinaryFromReader(message: LikeList, reader: jspb.BinaryReader): LikeList;
}

export namespace LikeList {
    export type AsObject = {
        itemsList: Array<Like.AsObject>,
    }
}

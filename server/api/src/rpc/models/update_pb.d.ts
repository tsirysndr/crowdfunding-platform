// package: models
// file: models/update.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Update extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Update.AsObject;
    static toObject(includeInstance: boolean, msg: Update): Update.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Update, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Update;
    static deserializeBinaryFromReader(message: Update, reader: jspb.BinaryReader): Update;
}

export namespace Update {
    export type AsObject = {
        id: string,
    }
}

export class UpdateList extends jspb.Message { 
    clearValuesList(): void;
    getValuesList(): Array<Update>;
    setValuesList(value: Array<Update>): void;
    addValues(value?: Update, index?: number): Update;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateList.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateList): UpdateList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateList;
    static deserializeBinaryFromReader(message: UpdateList, reader: jspb.BinaryReader): UpdateList;
}

export namespace UpdateList {
    export type AsObject = {
        valuesList: Array<Update.AsObject>,
    }
}

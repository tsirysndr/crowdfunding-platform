// package: models
// file: models/category.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Category extends jspb.Message { 
    getId(): string;
    setId(value: string): void;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: string,
    }
}

export class CategoryList extends jspb.Message { 
    clearItemsList(): void;
    getItemsList(): Array<Category>;
    setItemsList(value: Array<Category>): void;
    addItems(value?: Category, index?: number): Category;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CategoryList.AsObject;
    static toObject(includeInstance: boolean, msg: CategoryList): CategoryList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CategoryList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CategoryList;
    static deserializeBinaryFromReader(message: CategoryList, reader: jspb.BinaryReader): CategoryList;
}

export namespace CategoryList {
    export type AsObject = {
        itemsList: Array<Category.AsObject>,
    }
}

import { Document } from "mongoose";

export interface IImagenes extends Document{
    readonly id: string;
    readonly url:string;
    readonly favorita : boolean;
}
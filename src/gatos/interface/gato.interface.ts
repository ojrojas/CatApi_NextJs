import { Document } from "mongoose";

export interface IGato extends Document{
    id:number;
    nombre:string;
    raza:string;
    edad:number;
    foto: string;
}
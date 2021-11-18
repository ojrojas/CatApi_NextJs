import { Document } from 'mongoose';

export interface IGato extends Document {
  id: string;
  nombre: string;
  raza: string;
  edad: number;
  foto: string;
}

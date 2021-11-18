import { Schema } from 'mongoose';

export const GatoSchema = new Schema({
  nombre: { type: String, required: true },
  raza: { type: String, required: true },
  edad: { type: Number, required: true },
  foto: { type: String, required: true },
});

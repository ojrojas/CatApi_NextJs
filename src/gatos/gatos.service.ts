import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { IGato } from './interface/gato.interface';
import { GatoDto } from './dto/gato.dto';

@Injectable()
export class GatosService {
  constructor(@InjectModel('gato') private gatoModel: Model<IGato>) {}

  async getGatos(): Promise<IGato[]> {
    return await this.gatoModel.find();
  }

  async getGato(gatoId: string): Promise<IGato> {
    return await this.gatoModel.findById(gatoId);
  }

  async createGato(gatoDto: GatoDto): Promise<IGato> {
    return await this.gatoModel.create(gatoDto);
  }

  async updateGato(gatoId: string, createGato: GatoDto): Promise<IGato> {
    return await this.gatoModel.findByIdAndUpdate(gatoId, createGato, {
      new: true,
    });
  }

  async deleteGato(gatoId: string): Promise<IGato> {
    return await this.gatoModel.findByIdAndDelete(gatoId);
  }
}

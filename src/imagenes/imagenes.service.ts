import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IImagenes } from './interface/imagenes.interface';
import { ImagenesDto } from './dto/imagenes.dto';
import { HttpService } from './httpservices.service';

@Injectable()
export class ImagenesService {
  private keyC360 = process.env.KeyC360;
  constructor(
    @InjectModel('imagenes') private imagenModel: Model<IImagenes>,
    private httpService: HttpService,
  ) {}

  getImagenes() {
    const urlCatApi = `https://thecatapi.com/v1/images?api_key=${this.keyC360}`;
    return this.httpService.get(urlCatApi);
  }

  async createImagenFavorita(imagenDto: ImagenesDto): Promise<IImagenes> {
    return await this.imagenModel.create(imagenDto);
  }

  async DeleteImagenFavorita(id: string): Promise<any> {
    return await this.imagenModel.deleteOne({ id: id }, (err) => {
      if (err) throw err;
    });
  }

  async getImagenesFavoritas(): Promise<IImagenes[]> {
    return await this.imagenModel.find({ favorita: true });
  }
}

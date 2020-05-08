import { Injectable, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IImagenes } from './interface/imagenes.interface';
import { ImagenesDto } from './dto/imagenes.dto';
import { Observable } from 'rxjs';

@Injectable()
export class ImagenesService {

    private keyC360 = "f221c99b-304d-4404-b111-cbd3ddccf31a";
    constructor(@InjectModel('imagenes') private imagenModel: Model<IImagenes>,
    private httpService : HttpService) { }

    getImagenes()  {
        const urlCatApi = `https://thecatapi.com/v1/images?api_key=${this.keyC360}`;
        return this.httpService.get(urlCatApi);
    }

    async createImagenFavorita(imagenDto: ImagenesDto): Promise<IImagenes> {
        return await this.imagenModel.create(imagenDto);
    }

    async getImagenesFavoritas(): Promise<IImagenes[]> {
        return await this.imagenModel.find({favorita : true});
    }
  



}

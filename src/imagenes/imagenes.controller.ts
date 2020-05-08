import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
    constructor(private imagenesService: ImagenesService ) {}

    @Get('/')
    getImagenes(@Res() res) {

    }

    @Post('/favoritos')
    createImagenFavorita(@Res() res, @Body() body){

    } 

    @Get('/favoritos')
    getImagenesFavoritas(@Res() res) {
        
    }


}

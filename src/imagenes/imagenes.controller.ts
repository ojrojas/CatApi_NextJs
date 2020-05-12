import { Controller, Get, Res, Post, Body, Req, Param, Delete } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
    constructor(private imagenesService: ImagenesService) { }

    @Get('/')
    getImagenes(@Res() res) {

    }

    @Post('/favoritos')
    createImagenFavorita(@Res() res, @Body() body, @Req() req) {
        console.log("favorito resivido", body);
        this.imagenesService.createImagenFavorita(body).then((val: any) => {
            res.send(val);
        }, (err) => res.send(err));
    }

    @Delete('/favoritos/:id')
    deleteImagenFavorita(@Res() res, @Param('id') id, @Req() req) {
        console.log("favorito para eliminar", id);
        this.imagenesService.DeleteImagenFavorita(id).then((val: any) => {
            res.send(val);
        }, (err) => res.send(err));
    }

    @Get('/favoritos')
    getImagenesFavoritas(@Res() res) {

    }


}

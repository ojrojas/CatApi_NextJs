import { Controller, Get, Post, Res, Body, Put, Param, HttpStatus, NotFoundException, Delete } from '@nestjs/common';
import {IGato} from './interface/gato.interface'
import { GatoDto } from './dto/gato.dto'
import { GatosService } from './gatos.service';

@Controller('gatos')
export class GatosController {

    constructor(private gatoService: GatosService){}


    @Get('/')
    async getGatos(@Res() res) {
        const gatos = await this.gatoService.getGatos();
        return res.status(HttpStatus.OK).json(gatos);
    };

    @Get('/:id')
    async getGato(@Res() res, @Param('id') id: string): Promise<IGato> {
       const gato = await  this.gatoService.getGato(id);
       if(!gato) throw new NotFoundException("El gato no existe");
        return res.status(HttpStatus.OK).json({
            message: 'Gato obtenido', 
            gato
        })
    } 

    @Post('/')
    async CreateGato(@Res() res, @Body() gatodto : GatoDto) {
        const gato = await this.gatoService.createGato(gatodto);
        return res.status(HttpStatus.OK).json({
            message: 'Gato creado correctamente.',
            gato 
        });
    } 

    @Put('/:id')
    async updateGato(@Res() res,@Param('id') id, @Body() gatodto : GatoDto){
        const gato = await this.gatoService.updateGato(id,gatodto);
        if(!gato) throw new NotFoundException("El gato no existe");
        return res.status(HttpStatus.OK).json({
            message: 'Gato actualizado', 
            gato
        })
    }

    @Delete('/:id')
    async deleteGato(@Res() res, @Param('id') id: string): Promise<IGato> {
       const gato = await  this.gatoService.deleteGato(id);
       if(!gato) throw new NotFoundException("El gato no existe");
        return res.status(HttpStatus.OK).json({
            message: 'Gato eliminado', 
            gato
        })
    } 
}

import { Module } from '@nestjs/common';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagenesSchema } from './schema/imagenes.schema';
import { HttpService } from './httpservices.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'imagenes',
        schema: ImagenesSchema,
      },
    ]),
  ],
  controllers: [ImagenesController],
  providers: [ImagenesService, HttpService],
})
export class ImagenesModule {}

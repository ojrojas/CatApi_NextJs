import { Module, HttpModule } from '@nestjs/common';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagenesSchema } from './schema/imagenes.schema';

@Module({
  imports:[HttpModule,
    MongooseModule.forFeature([
      {
        name:'imagenes',
        schema : ImagenesSchema
      } 
    ])
    
  ],
  controllers: [ImagenesController],
  providers: [ImagenesService]
})
export class ImagenesModule {}

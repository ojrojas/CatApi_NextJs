import { Module } from '@nestjs/common';
import { GatosController } from './gatos.controller';
import { GatosService } from './gatos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GatoSchema } from './schemas/gatos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'gato',
        schema: GatoSchema,
      },
    ]),
  ],
  controllers: [GatosController],
  providers: [GatosService],
})
export class GatosModule {}

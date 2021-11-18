import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ImagenesModule } from './imagenes/imagenes.module';
import { GatosModule } from './gatos/gatos.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ImagenesModule,
    GatosModule,
    MongooseModule.forRoot('mongodb://localhost/c360-test', {
      ueFindAndModify: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

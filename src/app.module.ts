import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesController } from './places/places.controller';
import { PlacesService } from './places/places.service';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [PlacesModule],
  // controllers: [PlacesController],
  // providers: [PlacesService],
})
export class AppModule {}

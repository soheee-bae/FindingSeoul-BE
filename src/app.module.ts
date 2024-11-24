import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [PlacesModule],
})
export class AppModule {}

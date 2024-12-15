import { Module } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { StationsModule } from './stations/stations.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), PlacesModule, StationsModule],
})
export class AppModule {}

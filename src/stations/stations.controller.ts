import { Controller, Get, Query } from '@nestjs/common';
import { StationsService } from './stations.service';

@Controller('/places')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get()
  async findPlacesByStation(
    @Query('station') station: string,
    @Query('displayCount') displayCount: number = 75,
  ) {
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(station)}&sm=clk&style=v5&page=1&displayCount=${displayCount}&type=SITE_1
`;

    return await this.stationsService.findStationsByArea(apiUrl);
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { StationsService } from './stations.service';

@Controller('/stations')
export class StationsController {
  constructor(private readonly stationsService: StationsService) {}

  @Get(':station')
  async findPlacesByStation(@Param('station') station: string) {
    const apiUrl = `https://api.odcloud.kr/api/15081868/v1/uddi:5256a95e-01f0-45a8-a611-e4aaefc76388?page=1&perPage=30&serviceKey=${process.env.STATIONS_ENDPOINT_SECRET_KEY}
`;

    return await this.stationsService.findStationsByArea(apiUrl, station);
  }
}

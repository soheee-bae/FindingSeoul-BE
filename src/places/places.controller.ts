import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get(':name')
  async findPlaceByName(
    @Query('name') name: string,
    @Query('keyword') keyword: string,
    @Query('page') page: number = 1,
    @Query('displayCount') displayCount: number = 5,
  ) {
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(name)},${keyword},&sm=clk&style=v5&page=${page}&displayCount=${displayCount}&type=SITE_1
`;

    return await this.placesService.findPlaceByName(apiUrl);
  }
}

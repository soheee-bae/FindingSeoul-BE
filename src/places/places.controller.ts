import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findPlacesByStation(
    @Query('station') station: string,
    @Query('displayCount') displayCount: number = 75,
    @Query('type') type: string,
    @Query('search') search: string,
    @Query('siteSort') siteSort: number = 0, // relevant = 0, distance = 1
  ) {
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(station)}${search ? `, ${search}` : ''}&type=${type}&sm=clk&style=v5&page=1&displayCount=${displayCount}&siteSort=${siteSort}`;

    return await this.placesService.findPlacesByStation(apiUrl);
  }
}

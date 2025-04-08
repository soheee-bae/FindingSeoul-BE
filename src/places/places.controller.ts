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
    const stationLabel = `${station}역`;
    // const apiUrl = search
    //   ? `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(stationLabel)}${search ? `, ${search}` : ''}&siteSort=${siteSort}&sm=shistory&style=v5`
    //   : `https://m.map.naver.com/search2/interestSpotMore.naver?type=${type}&siteSort=${siteSort}&sm=clk&page=1&displayCount=${displayCount}`;

    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(stationLabel)}${search ? `, ${search}` : ''}&siteSort=${siteSort}&sm=shistory&style=v5&page=1&displayCount=${displayCount}`;
    return await this.placesService.findPlacesByStation(apiUrl);
  }
}

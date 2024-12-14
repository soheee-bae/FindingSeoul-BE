import { Controller, Get, Query, Param } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findPlacesByStation(
    @Query('station') station: string,
    @Query('displayCount') displayCount: number = 75,
  ) {
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(station)}&sm=clk&style=v5&page=1&displayCount=${displayCount}&type=SITE_1
`;

    return await this.placesService.findPlacesByStation(apiUrl);
  }

  @Get(':name')
  async findPlaceById(
    @Param('name') name: string,
    @Query('station') station: string,
    @Query('id') id: number,
    @Query('displayCount') displayCount: number = 5,
  ) {
    console.log('findPlaceById');
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${encodeURI(station)},${encodeURI(name)}&sm=clk&style=v5&page=1&displayCount=${displayCount}&type=SITE_1
  `;
    return await this.placesService.findPlaceById(apiUrl, id);
  }
}

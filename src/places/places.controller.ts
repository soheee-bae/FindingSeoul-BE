import { Controller, Get, Query } from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  async findPlacesByStation(
    @Query('station') station: string,
    @Query('displayCount') displayCount: number = 75,
    @Query('baseCategory') baseCategory: string,
    @Query('subCategory') subCategory: string,
    @Query('search') search: string,
    @Query('siteSort') siteSort: number = 0, // relevant = 0, distance = 1
  ) {
    const query = search
      ? `${encodeURI(station)} ${search}`
      : baseCategory && subCategory
        ? `${encodeURI(station)} ${baseCategory} ${subCategory}`
        : `${encodeURI(station)} ${baseCategory}`;

    console.log(query);
    const apiUrl = `https://m.map.naver.com/search2/searchMore.naver?query=${query}&sm=shistory&style=v5&page=1&displayCount=${displayCount}`;

    return siteSort
      ? await this.placesService.findPlacesByStation(
          apiUrl + `&siteSort=${siteSort}`,
        )
      : await this.placesService
          .findPlacesByStation(apiUrl + `&siteSort=0`)
          .then(async (result) => {
            const data = await this.placesService.findPlacesByStation(
              apiUrl + `&siteSort=1`,
            );
            return [...result, ...data];
          });
  }
}

// (sitesort 1 + sitesort 0) - common = result

// Filter :
// 우장산(station) + base category + sub category (if exist) // clear search

// search :
// 우장산(station) + search + base category// clear sub category

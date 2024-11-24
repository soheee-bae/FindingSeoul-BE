import { Controller, Get, Param } from '@nestjs/common';
import { PlacesService } from './places.service';

const CLIENT_ID = '2tK8NCHD34yAZEN7NKRV';
const CLIENT_SECRET = '1GuSK5iRFA';

@Controller('/places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  findAll() {
    return this.placesService.findAll();
  }

  @Get(':name')
  async findOne(@Param('name') name: string) {
    const apiUrl =
      'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(name);

    const options = {
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET,
      },
    };
    return await this.placesService.findOne(apiUrl, options);
  }
}

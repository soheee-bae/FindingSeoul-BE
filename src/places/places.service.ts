import { Injectable, Logger } from '@nestjs/common';
import { Place } from './interfaces/place.interface';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';

@Injectable()
export class PlacesService {
  private readonly logger = new Logger(PlacesService.name);
  constructor(private readonly httpService: HttpService) {}

  async findPlacesByStation(
    apiUrl: string,
    options?: {
      headers: { [key: string]: string };
    },
  ): Promise<Place[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(apiUrl, options).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Unabled to fetch place from findPlacesByStation method';
        }),
      ),
    );

    const list = data.result.site.list;
    return list;
  }

  async findPlaceById(apiUrl: string, id: number): Promise<Place> {
    const { data } = await firstValueFrom(
      this.httpService.get(apiUrl).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Unabled to fetch place from findPlaceById method';
        }),
      ),
    );

    const list = data.result.site.list;
    const result = list.find((item) => item.id === id);
    return result;
  }
}

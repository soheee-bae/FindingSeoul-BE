import { Injectable, Logger } from '@nestjs/common';
import { Place } from './interfaces/place.interface';
import axios, { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError, find, from } from 'rxjs';

@Injectable()
export class PlacesService {
  private readonly logger = new Logger(PlacesService.name);
  constructor(private readonly httpService: HttpService) {}

  async findOne(
    apiUrl: string,
    options: {
      headers: { [key: string]: string };
    },
  ): Promise<Place[]> {
    const { data } = await firstValueFrom(
      this.httpService.get<Place[]>(apiUrl, options).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Unabled to fetch place from findOne method';
        }),
      ),
    );

    return data;
  }

  async findAll() {
    return `ehreeeerer`;
  }
}

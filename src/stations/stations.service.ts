import { Injectable, Logger } from '@nestjs/common';
import { Station } from './interfaces/station.interface';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';

@Injectable()
export class StationsService {
  private readonly logger = new Logger(StationsService.name);
  constructor(private readonly httpService: HttpService) {}

  async findStationsByArea(
    apiUrl: string,
    station: string,
  ): Promise<Station[]> {
    const { data } = await firstValueFrom(
      this.httpService.get(apiUrl).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Unabled to fetch stations from findStationsByArea method';
        }),
      ),
    );

    return data.data.find((s) => s.자치구 === station);
  }
}

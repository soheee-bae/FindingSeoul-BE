import { Injectable, Logger } from '@nestjs/common';
import { Stations } from './interfaces/station.interface';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, catchError } from 'rxjs';

@Injectable()
export class StationsService {
  private readonly logger = new Logger(StationsService.name);
  constructor(private readonly httpService: HttpService) {}

  async findStationsByArea(apiUrl: string, station: string): Promise<Stations> {
    const { data } = await firstValueFrom(
      this.httpService.get(apiUrl).pipe(
        catchError((error: AxiosError) => {
          this.logger.error(error.response.data);
          throw 'Unabled to fetch stations from findStationsByArea method';
        }),
      ),
    );

    const stations = data.data.find((s) => s.자치구 === station);

    const result = {
      totalCount: stations[`역개수`],
      name: stations[`자치구`],
      stations: stations[`해당역(호선)`].split(',').map((s) => {
        const data = s.split(/[()]/).filter(Boolean);
        return { name: data[0], subwayLine: Number(data[1]) };
      }),
    };

    return result;
  }
}

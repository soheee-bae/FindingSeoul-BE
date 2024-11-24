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
    const { data } = await from(
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

// // 네이버 검색 API 예제 - 블로그 검색
// var app = express();

// app.get('/search/blog', function (req, res) {
//    var api_url = 'https://openapi.naver.com/v1/search/blog?query=' + encodeURI(req.query.query); // JSON 결과
//    var request = require('request');
//    var options = {
//        url: api_url,
//        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
//     };
//    request.get(options, function (error, response, body) {
//      if (!error && response.statusCode == 200) {
//        res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
//        res.end(body);
//      } else {
//        res.status(response.statusCode).end();
//        console.log('error = ' + response.statusCode);
//      }
//    });
//  });

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
  findOne(@Param('name') name: string) {
    return this.placesService.findOne(name);
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

import { Injectable } from '@nestjs/common';
import { Place } from './interfaces/place.interface';

@Injectable()
export class PlacesService {
  private readonly places: Place[] = [];

  async findOne(name: string): Promise<string> {
    const result = `hello from ${name}`;
    return result;
  }
  async findAll() {
    return `ehreeeerer`;
  }
}

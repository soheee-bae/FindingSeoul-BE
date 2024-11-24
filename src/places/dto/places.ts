import { IsNotEmpty, IsString } from 'class-validator';

export class PlaceDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

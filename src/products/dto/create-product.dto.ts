import { IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  name: string;

  @IsString()
  description: string;
}

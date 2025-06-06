import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  title: string;

  @IsString()
  name: string;

  @IsString()
  description: string;


    @IsNumber()
  @IsNotEmpty()
  price: number;

}

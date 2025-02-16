import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVideoTypeDto {
  @IsString({ message: `Trường type_name phải là string` })
  @IsNotEmpty({ message: `Trường Type_name bắt buộc phải cos` })
  @ApiProperty()
  type_name: string;
}

import {
  ArrayMaxSize,
  IsArray,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class CompanionInputDto {
  @IsString()
  @MinLength(2)
  @MaxLength(120)
  name!: string;

  @IsString()
  @IsNotEmpty()
  phone!: string;
}

export class UpdateCompanionsDto {
  @IsArray()
  @ArrayMaxSize(10, {
    message: 'É permitido informar no máximo 10 acompanhantes.',
  })
  @ValidateNested({ each: true })
  @Type(() => CompanionInputDto)
  companions!: CompanionInputDto[];
}

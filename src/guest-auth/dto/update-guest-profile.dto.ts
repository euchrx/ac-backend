import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateGuestProfileDto {
  @IsOptional()
  @IsString()
  @MinLength(2, { message: 'Informe um nome válido.' })
  @MaxLength(120, { message: 'O nome deve ter no máximo 120 caracteres.' })
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(10, { message: 'Informe um WhatsApp válido.' })
  @MaxLength(20, { message: 'O WhatsApp informado é muito longo.' })
  phone?: string;
}

import { IsEnum } from 'class-validator';

import { AttendanceStatus } from '../../generated/prisma/enums';

export class UpdateAttendanceDto {
  @IsEnum(AttendanceStatus, {
    message: 'Situação de presença inválida.',
  })
  attendance!: AttendanceStatus;
}

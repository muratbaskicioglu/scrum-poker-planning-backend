import { ApiResponseProperty } from '@nestjs/swagger';

export class HealthResponse {
  @ApiResponseProperty()
  status: string;

  @ApiResponseProperty()
  time: number;
}

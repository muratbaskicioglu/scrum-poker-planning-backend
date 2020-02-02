import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { AppService } from './app.service';
import { HealthResponse } from './health-response.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiTags('description')
  @Get()
  definition(): string {
    return this.appService.definition();
  }

  @ApiTags('health')
  @ApiOkResponse({ type: HealthResponse })
  @Get('health')
  health(): HealthResponse {
    return this.appService.health();
  }
}

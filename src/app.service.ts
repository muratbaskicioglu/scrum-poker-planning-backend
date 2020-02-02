import { Injectable } from '@nestjs/common';

import { HealthResponse } from './health-response.dto';

@Injectable()
export class AppService {
  definition(): string {
    return 'Scrum Poker Planning API';
  }

  health(): HealthResponse {
    // TODO: Might be added status check for database

    return {
      status: 'Available',
      time: Date.now(),
    };
  }
}

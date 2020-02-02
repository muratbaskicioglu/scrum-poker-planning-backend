import { Injectable } from '@nestjs/common';

import { EnvReader } from './env-reader.interface';
import { EnvMap } from './models/env-map.model';

@Injectable()
export class ProcessEnvReader implements EnvReader {
  private readonly env: any;

  constructor() {
    this.env = this.read();
  }

  read(): any {
    return process.env;
  }

  getParsed(): EnvMap {
    return {
      NODE_ENV: this.env.NODE_ENV,
      PORT: this.env.PORT,
    };
  }
}

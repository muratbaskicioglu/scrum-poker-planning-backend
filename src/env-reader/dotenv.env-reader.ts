import { readFileSync } from 'fs';
import * as dotenv from 'dotenv';
import { Injectable } from '@nestjs/common';

import { EnvReader } from './env-reader.interface';

@Injectable()
export class DotenvEnvReader implements EnvReader {
  private readonly env: string;

  constructor() {
    this.env = this.read();
  }

  read(): string {
    const fileName = `${process.env.NODE_ENV || 'dev'}.env`;

    return readFileSync(fileName).toString();
  }

  getParsed(): dotenv.DotenvParseOutput {
    return dotenv.parse(this.env);
  }
}

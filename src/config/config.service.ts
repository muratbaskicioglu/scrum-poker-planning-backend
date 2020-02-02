import { DotenvParseOutput } from 'dotenv';
import * as Joi from 'joi';
import { Injectable } from '@nestjs/common';

import { EnvReader } from '../env-reader/env-reader.interface';
import { EnvVars } from './models/env-vars.model';
import { ServerConfig } from './models/server-config.model';

@Injectable()
export class ConfigService {
  envVars: EnvVars;

  constructor(envReader: EnvReader) {
    const envVars = envReader.getParsed();
    this.envVars = this.validateEnvVars(envVars);
  }

  private validateEnvVars(envVars: DotenvParseOutput): EnvVars {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid(['local', 'dev', 'prod', 'test'])
        .default('dev'),
      PORT: Joi.number().default(5454),
    });

    const { error, value: validatedEnvVars } = Joi.validate(envVars, envVarsSchema);

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvVars;
  }

  get(key: string): any {
    return this.envVars[key];
  }

  get serverConfig(): ServerConfig {
    return {
      port: this.envVars.PORT,
    };
  }
}

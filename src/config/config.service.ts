import { DotenvParseOutput } from 'dotenv';
import * as Joi from 'joi';
import { Injectable } from '@nestjs/common';

import { EnvReader } from '../env-reader/env-reader.interface';
import { EnvVars } from './models/env-vars.model';
import { ServerConfig } from './models/server-config.model';
import { DatabaseConfig } from './models/database-config.model';

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
      DATABASE_HOST: Joi.string().default('localhost'),
      DATABASE_PORT: Joi.number().default(5432),
      DATABASE_USERNAME: Joi.string().default('test'),
      DATABASE_PASSWORD: Joi.string().default('secret'),
      DATABASE_NAME: Joi.string().default('scrum-poker-planning'),
      DATABASE_SYNCHRONIZE: Joi.boolean().default(true),
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

  get databaseConfig(): DatabaseConfig {
    return {
      host: this.envVars.DATABASE_HOST,
      port: this.envVars.PORT,
      username: this.envVars.DATABASE_USERNAME,
      password: this.envVars.DATABASE_PASSWORD,
      name: this.envVars.DATABASE_NAME,
      synchronize: this.envVars.DATABASE_SYNCHRONIZE,
    };
  }
}

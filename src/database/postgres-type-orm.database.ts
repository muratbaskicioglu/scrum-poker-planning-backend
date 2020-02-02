import { DynamicModule } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';

import { Database } from './database.interface';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { DatabaseConfig } from '../config/models/database-config.model';

function createTypeOrmConfig(databaseConfig: DatabaseConfig): TypeOrmModuleOptions {
  return {
    type: 'postgres',
    host: databaseConfig.host,
    port: databaseConfig.port,
    username: databaseConfig.username,
    password: databaseConfig.password,
    database: databaseConfig.name,
    synchronize: databaseConfig.synchronize,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
  };
}

export class PostgresTypeOrmDatabase implements Database {
  register(): DynamicModule {
    return {
      module: PostgresTypeOrmDatabase,
      imports: [
        TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          useFactory: async (configService: ConfigService) => (
            createTypeOrmConfig(configService.databaseConfig)
          ),
          inject: [ConfigService],
        }),
      ],
    };
  }
}

import { Global, Module } from '@nestjs/common';

import { EnvReaderModule } from '../env-reader/env-reader.module';
import { EnvReader } from '../env-reader/env-reader.interface';
import { ConfigService } from './config.service';

@Global()
@Module({
  imports: [EnvReaderModule],
  providers: [
    {
      provide: ConfigService,
      useFactory: (envReader: EnvReader) => {
        return new ConfigService(envReader);
      },
      inject: [EnvReader],
    },
  ],
  exports: [ConfigService],
})
export class ConfigModule {}

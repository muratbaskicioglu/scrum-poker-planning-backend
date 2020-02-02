import { Module } from '@nestjs/common';

import { EnvReader } from './env-reader.interface';
import { DotenvEnvReader } from './dotenv.env-reader';
import { ProcessEnvReader } from './process.env-reader';

@Module({
  providers: [
    {
      provide: EnvReader,
      useClass: process.env.NODE_ENV === 'production' ?
        ProcessEnvReader :
        DotenvEnvReader,
    },
    ProcessEnvReader,
  ],
  exports: [EnvReader],
})
export class EnvReaderModule {}

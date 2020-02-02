import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionModule } from './session/session.module';

@Module({
  imports: [ConfigModule, SessionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

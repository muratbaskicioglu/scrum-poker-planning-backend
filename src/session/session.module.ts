import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SessionController } from './session.controller';
import { SessionService } from './session.service';
import { SessionEntity } from './entity/session.entity';
import { StoryModule } from '../story/story.module';
import { StoryEntity } from '../story/entity/story.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SessionEntity]),
    TypeOrmModule.forFeature([StoryEntity]),
    StoryModule,
  ],
  providers: [SessionService],
  controllers: [SessionController],
  exports: [SessionService],
})
export class SessionModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { StoryEntity } from './entity/story.entity';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([StoryEntity]),
  ],
  providers: [StoryService],
  controllers: [StoryController],
  exports: [StoryService],
})
export class StoryModule {}

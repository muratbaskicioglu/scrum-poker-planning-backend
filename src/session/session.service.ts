import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Session } from './models/Session.model';
import { CreateSessionRequest } from './dto/create-session-request.dto';
import { SessionEntity } from './entity/session.entity';
import { StoryEntity } from '../story/entity/story.entity';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly sessionRepository: Repository<SessionEntity>,
  ) {}

  async createSession(createSessionRequest: CreateSessionRequest): Promise<Session> {
    const session: Session = new CreateSessionRequest(createSessionRequest).toSessionModel();

    const sessionEntity = new SessionEntity();
    sessionEntity.name = session.getName();
    sessionEntity.numberOfVoters = session.getNumberOfVoters();

    sessionEntity.stories = session.getStoryList().map((storyName) => {
      const storyEntity = new StoryEntity();
      storyEntity.name = storyName;
      return storyEntity;
    });

    const { id, name, numberOfVoters } = await this.sessionRepository.save(sessionEntity);

    return Session.new
      .setId(id)
      .setName(name)
      .setNumberOfVoters(numberOfVoters);
  }

  getStoriesOfSession({ sessionId }): any {
    return null;
  }
}

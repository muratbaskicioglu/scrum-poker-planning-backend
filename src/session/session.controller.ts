import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { SessionService } from './session.service';
import { CreateSessionRequest } from './dto/create-session-request.dto';
import { CreateSessionResponse } from './dto/create-session-response.dto';
import { Story } from '../story/models/story.model';
import { GetStoriesOfSessionRequest } from './dto/get-stories-of-session-request.dto';

@Controller('sessions')
export class SessionController {
  constructor(
    public sessionService: SessionService,
  ) {}

  @ApiOkResponse({ type: CreateSessionResponse })
  @Post()
  async createSession(@Body() createSessionRequest: CreateSessionRequest): Promise<CreateSessionResponse> {
    return CreateSessionResponse.build(
      await this.sessionService.createSession(createSessionRequest),
    );
  }

  @ApiOkResponse({
    type: Story,
    isArray: true,
  })
  @Get(':sessionId/stories')
  getStoriesOfSession(@Param() getStoriesOfSessionRequest: GetStoriesOfSessionRequest): any {
    return this.sessionService.getStoriesOfSession(getStoriesOfSessionRequest);
  }
}

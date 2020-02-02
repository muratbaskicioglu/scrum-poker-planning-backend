import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Session } from '../models/Session.model';

export class CreateSessionRequest {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  numberOfVoters: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  storyList: string[];

  constructor(partial?: Partial<CreateSessionRequest>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  public toSessionModel(): Session {
    return Session.new
      .setName(this.name)
      .setNumberOfVoters(this.numberOfVoters)
      .setStoryList(this.storyList);
  }
}

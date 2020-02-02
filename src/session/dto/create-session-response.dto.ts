import { ApiResponseProperty } from '@nestjs/swagger';

import { Session } from '../models/session.model';

export class CreateSessionResponse {
  @ApiResponseProperty()
  private id: number;

  @ApiResponseProperty()
  private name: string;

  @ApiResponseProperty()
  private numberOfVoters: number;

  private setId(id) {
    this.id = id;

    return this;
  }

  private setName(name: string) {
    this.name = name;

    return this;
  }

  private setNumberOfVoters(numberOfVoters: number) {
    this.numberOfVoters = numberOfVoters;

    return this;
  }

  static build(session: Session): CreateSessionResponse {
    return (new CreateSessionResponse())
      .setId(session.getId())
      .setName(session.getName())
      .setNumberOfVoters(session.getNumberOfVoters());
  }
}

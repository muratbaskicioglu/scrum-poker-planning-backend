import { ApiResponseProperty } from '@nestjs/swagger';

export class Session {
  @ApiResponseProperty()
  _id?: any;

  @ApiResponseProperty()
  private name: string;

  @ApiResponseProperty()
  private numberOfVoters: number;

  @ApiResponseProperty()
  private storyList: string[];

  static get new(): Session {
    return new Session();
  }

  constructor(partial?: Partial<Session>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  setId(_id: any): Session {
    if (_id) {
      this._id = _id;
    }

    return this;
  }

  getId(): any {
    return this._id;
  }

  setName(name: string): Session {
    if (name) {
      this.name = name;
    }

    return this;
  }

  getName(): string {
    return this.name;
  }

  setNumberOfVoters(numberOfVoters: number): Session {
    if (numberOfVoters) {
      this.numberOfVoters = numberOfVoters;
    }

    return this;
  }

  getNumberOfVoters(): number {
    return this.numberOfVoters;
  }

  setStoryList(storyList: string[]): Session {
    if (storyList) {
      this.storyList = storyList;
    }

    return this;
  }

  getStoryList(): string[] {
    return this.storyList;
  }
}

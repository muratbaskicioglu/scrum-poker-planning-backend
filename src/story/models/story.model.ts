import { ApiResponseProperty } from '@nestjs/swagger';

export class Story {
  @ApiResponseProperty()
  _id?: any;

  @ApiResponseProperty()
  private name: string;

  @ApiResponseProperty()
  private point: number;

  @ApiResponseProperty()
  private status: string;

  static get new(): Story {
    return new Story();
  }

  constructor(partial?: Partial<Story>) {
    if (partial) {
      Object.assign(this, partial);
    }
  }

  setId(_id: any): Story {
    if (_id) {
      this._id = _id;
    }

    return this;
  }

  getId(): any {
    return this._id;
  }

  setName(name: string): Story {
    if (name) {
      this.name = name;
    }

    return this;
  }

  getName(): string {
    return this.name;
  }

  setPoint(point: number): Story {
    if (point) {
      this.point = point;
    }

    return this;
  }

  getPoint(): number {
    return this.point;
  }

  setStatus(status: string): Story {
    if (status) {
      this.status = status;
    }

    return this;
  }

  getStatus(): string {
    return this.status;
  }
}

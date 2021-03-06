import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class GetStoriesOfSessionRequest {
  @ApiProperty()
  @IsNotEmpty()
  sessionId: number;
}

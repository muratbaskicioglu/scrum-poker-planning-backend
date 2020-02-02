import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { StoryEntity } from '../../story/entity/story.entity';

@Entity('session')
export class SessionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  numberOfVoters: number;

  @OneToMany(type => StoryEntity, story => story.session)
  stories: StoryEntity[];
}

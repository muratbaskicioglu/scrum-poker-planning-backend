import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SessionEntity } from '../../session/entity/session.entity';

@Entity('story')
export class StoryEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  point: number;

  @Column()
  status: string;

  @ManyToOne(type => SessionEntity, session => session.stories)
  session: SessionEntity;
}

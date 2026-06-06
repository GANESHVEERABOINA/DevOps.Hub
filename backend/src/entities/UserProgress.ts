// backend/src/entities/UserProgress.ts
/**
 * UserProgress entity - tracks user completion of resources.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { User } from './User';

@Entity('user_progress')
@Unique(['user', 'resource_type', 'resource_id'])
export class UserProgress {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (u) => u.progress)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column({ type: 'varchar', length: 50 })
  resource_type!: string; // roadmap_topic, project, question_category

  @Column()
  resource_id!: number;

  @Column({ type: 'varchar', length: 20, default: 'not_started' })
  status!: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  percent_complete!: number;

  @Column({ type: 'timestamptz', nullable: true })
  started_at?: Date;

  @Column({ type: 'timestamptz', nullable: true })
  completed_at?: Date;
}
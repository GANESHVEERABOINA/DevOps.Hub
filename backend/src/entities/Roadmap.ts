// backend/src/entities/Roadmap.ts
/**
 * Roadmap entity - learning roadmap.
 */
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { RoadmapTopic } from './RoadmapTopic';

@Entity('roadmaps')
export class Roadmap {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column({ unique: true })
  slug!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  estimated_hours?: number;

  @Column({ nullable: true })
  icon_url?: string;

  @Column({ default: false })
  is_published!: boolean;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;

  @OneToMany(() => RoadmapTopic, (topic) => topic.roadmap)
  topics!: RoadmapTopic[];
}
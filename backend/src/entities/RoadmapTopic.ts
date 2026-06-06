// backend/src/entities/RoadmapTopic.ts
/**
 * RoadmapTopic entity - individual topic within a roadmap.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Roadmap } from './Roadmap';

@Entity('roadmap_topics')
export class RoadmapTopic {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Roadmap, (r) => r.topics)
  @JoinColumn({ name: 'roadmap_id' })
  roadmap!: Roadmap;

  @Column()
  title!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  content?: string;

  @Column()
  order_index!: number;

  @Column({ nullable: true })
  estimated_minutes?: number;

  @ManyToOne(() => RoadmapTopic, { nullable: true })
  @JoinColumn({ name: 'parent_topic_id' })
  parent?: RoadmapTopic;

  @Column('int', { array: true, default: '{}' })
  prerequisite_topic_ids!: number[];

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}
// backend/src/entities/Project.ts
/**
 * Project entity - hands-on DevOps project.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('projects')
export class Project {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  title!: string;

  @Column({ unique: true, nullable: true })
  slug?: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ type: 'varchar', length: 50 })
  category!: string; // beginner, intermediate, advanced

  @Column({ nullable: true })
  overview?: string;

  @Column({ nullable: true })
  architecture_diagram_url?: string;

  @Column('jsonb', { default: '[]' })
  steps!: any[];

  @Column({ nullable: true })
  expected_output?: string;

  @Column({ nullable: true })
  learning_outcome?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}
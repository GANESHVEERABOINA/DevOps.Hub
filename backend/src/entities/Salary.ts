// backend/src/entities/Salary.ts
/**
 * Salary entity - salary data points.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('salary_data')
export class Salary {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  role!: string;

  @Column({ type: 'varchar', length: 50 })
  experience_level!: string;

  @Column({ nullable: true })
  location?: string;

  @Column({ default: 'USD' })
  currency!: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  min_salary?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  max_salary?: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: true })
  average_salary?: number;

  @Column({ nullable: true })
  source?: string;

  @Column()
  year!: number;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}
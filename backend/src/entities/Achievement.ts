// backend/src/entities/Achievement.ts
/**
 * Achievement entity - badge definitions.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('achievements')
export class Achievement {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @Column({ nullable: true })
  description?: string;

  @Column({ nullable: true })
  badge_icon_url?: string;

  @Column('jsonb')
  criteria!: any;

  @Column({ default: 0 })
  points!: number;
}
// backend/src/entities/Setting.ts
/**
 * Setting entity - user preferences (theme, notifications, etc.).
 */
import { Entity, PrimaryColumn, Column, JoinColumn, OneToOne } from 'typeorm';
import { User } from './User';

@Entity('user_settings')
export class Setting {
  @PrimaryColumn('uuid')
  user_id!: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column('jsonb', { default: '{}' })
  preferences!: any;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  updated_at!: Date;
}
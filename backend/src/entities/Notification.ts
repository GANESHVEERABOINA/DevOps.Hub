// backend/src/entities/Notification.ts
/**
 * Notification entity - system notifications for users.
 */
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity('notifications')
export class Notification {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user!: User;

  @Column()
  title!: string;

  @Column({ nullable: true })
  message?: string;

  @Column({ default: false })
  is_read!: boolean;

  @Column({ type: 'varchar', length: 50, default: 'general' })
  notification_type!: string;

  @Column({ nullable: true })
  link?: string;

  @Column({ type: 'timestamptz', default: () => 'NOW()' })
  created_at!: Date;
}
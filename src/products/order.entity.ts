import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userEmail: string;

  @Column('json')
  products: any[]; // Store cart items (or use related entities)

  @Column()
  totalAmount: number;

  @Column()
  paymentStatus: 'pending' | 'paid' | 'failed';

  @Column({ nullable: true })
  stripePaymentIntentId?: string;
}

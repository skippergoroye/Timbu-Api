import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")  
  id: number;

  @Column()
  title: string;

  @Column()
  name: string;


  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  imageUrl: string;

  @Column({ default: '' })
  imagePublicId: string;
}

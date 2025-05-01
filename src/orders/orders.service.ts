import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/products/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
    constructor(
        @InjectRepository(Order)
        private readonly orderRepo: Repository<Order>,
      ) {}
    
      async getOrdersByEmail(email: string): Promise<Order[]> {
        return this.orderRepo.find({
          where: { userEmail: email },
          order: { id: 'DESC' },
        });
      }
}

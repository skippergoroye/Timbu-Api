import { Order } from 'src/products/order.entity';
import { Repository } from 'typeorm';
export declare class OrdersService {
    private readonly orderRepo;
    constructor(orderRepo: Repository<Order>);
    getOrdersByEmail(email: string): Promise<Order[]>;
}

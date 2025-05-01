import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getOrdersByEmail(email: string): Promise<import("../products/order.entity").Order[]>;
}

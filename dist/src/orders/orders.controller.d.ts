import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    getAllOrders(): Promise<import("../products/order.entity").Order[]>;
    getOrdersByEmail(email: string): Promise<import("../products/order.entity").Order[]>;
}

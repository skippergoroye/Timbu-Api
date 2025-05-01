import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Order } from 'src/products/order.entity';
export declare class PaymentsService {
    private configService;
    private orderRepo;
    private stripe;
    constructor(configService: ConfigService, orderRepo: Repository<Order>);
    createPaymentIntent(cart: any[], email: string): Promise<{
        clientSecret: string;
    }>;
}

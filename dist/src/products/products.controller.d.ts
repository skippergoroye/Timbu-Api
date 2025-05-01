import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';
import { PaymentsService } from 'src/payments/payments.service';
export declare class ProductController {
    private readonly productService;
    private readonly paymentsService;
    constructor(productService: ProductService, paymentsService: PaymentsService);
    create(file: Express.Multer.File, body: CreateProductDto): Promise<import("./product.entity").Product>;
    findAll(): Promise<import("./product.entity").Product[]>;
    delete(id: number): Promise<string>;
    checkout(body: {
        cart: any[];
        email: string;
    }): Promise<{
        clientSecret: string;
    }>;
}

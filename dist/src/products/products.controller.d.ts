import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './products.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(file: Express.Multer.File, body: CreateProductDto): Promise<import("./product.entity").Product>;
    findAll(): Promise<import("./product.entity").Product[]>;
    delete(id: number): Promise<string>;
}

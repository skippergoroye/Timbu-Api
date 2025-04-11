import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
export declare class ProductService {
    private productRepo;
    constructor(productRepo: Repository<Product>);
    createProduct(dto: CreateProductDto, imageUrl: string, imagePublicId: string): Promise<Product>;
    getAllProducts(): Promise<Product[]>;
    deleteProduct(id: number): Promise<string>;
}

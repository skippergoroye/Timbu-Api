import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  // async createProduct(dto: CreateProductDto, imageUrl: string): Promise<Product> {
  //   const product = this.productRepo.create({ ...dto, imageUrl });
  //   return this.productRepo.save(product);
  // }


  async createProduct(
    dto: CreateProductDto,
    imageUrl: string,
    imagePublicId: string,
  ): Promise<Product> {
    const product = this.productRepo.create({
      ...dto,
      imageUrl,
      imagePublicId,
    });
    return this.productRepo.save(product);
  }
  

  async getAllProducts(): Promise<Product[]> {
    return this.productRepo.find();
  }


  async deleteProduct(id: number): Promise<string> {
    const product = await this.productRepo.findOne({ where: { id } });
  
    if (!product) throw new NotFoundException('Product not found');
  
    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(product.imagePublicId);
  
    // Delete from DB
    await this.productRepo.remove(product);
  
    return 'Product deleted successfully';
  }
}

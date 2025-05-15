import {
  Controller,
  Post,
  Get,
  Body,
  UploadedFile,
  UseInterceptors,
  Delete,
  Param,
  BadRequestException,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateProductDto } from './dto/create-product.dto';
import { Express } from 'express';
import { ProductService } from './products.service';
import * as multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import { cloudinary } from '../config/cloudinary.config';
import { PaymentsService } from 'src/payments/payments.service';
// import { PaymentsService } from 'src/ payments/payments.service';

// Set up Multer Storage Engine with Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    // folder: 'product-images', // Folder name in Cloudinary
    // allowed_formats: ['jpg', 'jpeg', 'png'], // Allow only these formats
    // transformation: [{ width: 500, height: 500, crop: 'limit' }], // Resize images (optional)
  },
});

@Controller('products')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly paymentsService: PaymentsService,
  ) {}

  // @Post()
  // @UseInterceptors(FileInterceptor('image', { storage }))
  // async create(
  //   @UploadedFile() file: Express.Multer.File,
  //   @Body() body: CreateProductDto,
  // ) {
  //   return this.productService.createProduct(body, file.path);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('image', { storage }))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() body: CreateProductDto,
  ) {
    if (!file) {
      throw new Error('Image file is required');
    }
    return this.productService.createProduct(body, file.path, file.filename); // file.filename holds public_id
  }

  @Get()
  async findAll() {
    return this.productService.getAllProducts();
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.productService.deleteProduct(id);
  }

  @Post('checkout')
  async checkout(@Body() body: any) {
    console.log('Received checkout body:', body);

    if (!Array.isArray(body.items)) {
      throw new BadRequestException('Items must be an array');
    }

    const totalAmount = body.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    return this.paymentsService.createPaymentIntent(body.items, body.email);
  }
}

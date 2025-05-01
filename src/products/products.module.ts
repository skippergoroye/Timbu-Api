import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductService } from './products.service';
import { ProductController } from './products.controller';
import { Order } from './order.entity';
import { PaymentsModule } from 'src/payments/payments.module';


@Module({
  imports: [TypeOrmModule.forFeature([Product]), PaymentsModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductsModule {}

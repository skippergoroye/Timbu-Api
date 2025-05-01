import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from 'src/products/order.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [PaymentsService],
  exports: [PaymentsService], // 👈 export to be used in other modules
})
export class PaymentsModule {}


// src/orders/orders.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getAllOrders() {
    return this.ordersService.getAllOrders();
  }

  @Get(':email')
  async getOrdersByEmail(@Param('email') email: string) {
    return this.ordersService.getOrdersByEmail(email);
  }
}

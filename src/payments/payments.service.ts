import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from 'src/products/order.entity';


@Injectable()
export class PaymentsService {
  private stripe: Stripe;

  constructor(
    private configService: ConfigService,
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
        apiVersion: '2025-04-30.basil',
    });
  }

  async createPaymentIntent(cart: any[], email: string) {
    const amount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: amount * 100, // cents
      currency: 'usd',
      receipt_email: email,
    });

    const order = this.orderRepo.create({
      userEmail: email,
      products: cart,
      totalAmount: amount,
      paymentStatus: 'pending',
      stripePaymentIntentId: paymentIntent.id,
    });

    await this.orderRepo.save(order);

    return { clientSecret: paymentIntent.client_secret };
  }
}

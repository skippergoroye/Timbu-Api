export declare class Order {
    id: number;
    userEmail: string;
    products: any[];
    totalAmount: number;
    paymentStatus: 'pending' | 'paid' | 'failed';
    stripePaymentIntentId?: string;
}

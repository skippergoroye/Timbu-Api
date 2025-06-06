// import { DataSource, DataSourceOptions } from 'typeorm';
// import { config } from 'dotenv';
// config();




// export const dataSourceOptions: DataSourceOptions = {
//   type: 'postgres',
//   host: process.env.DB_HOST, 
//   port: parseInt(process.env.DB_PORT),
//   username: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   synchronize: true, // Set to false in production, to avoid automatic schema syncing
//   // logging: true,  // You can enable logging for development
//   entities: ['dist/**/*.entity.js'],
//   migrations: ['dist/db/migrations/*.js'],  
//   ssl: process.env.DB_SSL === 'true' ? true : false, // Enable SSL
// };






// const AppDataSource = new DataSource(dataSourceOptions);

// export default AppDataSource;




// data-source.ts

import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Product } from 'src/products/product.entity';
import { Order } from 'src/products/order.entity';

config(); // Load environment variables

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL, // Full Neon DB URL from .env

  // SSL is required for Neon
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,

  // TypeORM setup
  entities: [Product, Order],
  migrations: ['dist/migration/**/*.js'], // Make sure you use JS after build
  synchronize: true, // ⚠️ Disable in production and use migrations

  schema: 'public', // 👈 Important for Neon
  logging: process.env.NODE_ENV !== 'production',
};

const AppDataSource = new DataSource(dataSourceOptions);
export default AppDataSource;




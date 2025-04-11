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




// Neon 

import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
import { Product } from 'src/products/product.entity';
config();




export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL, // should include user, password, host, db, etc.
  ssl: {
    rejectUnauthorized: false, // For local dev; in production, use proper certs
  },
  entities: [Product],
  migrations: ['src/migration/**/*.ts'],
  synchronize: false,
};






const AppDataSource = new DataSource(dataSourceOptions);

export default AppDataSource;



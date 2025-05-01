"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const product_entity_1 = require("../src/products/product.entity");
const order_entity_1 = require("../src/products/order.entity");
(0, dotenv_1.config)();
exports.dataSourceOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
    entities: [product_entity_1.Product, order_entity_1.Order],
    migrations: ['src/migration/**/*.ts'],
    synchronize: true,
};
const AppDataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = AppDataSource;
//# sourceMappingURL=data-source.js.map
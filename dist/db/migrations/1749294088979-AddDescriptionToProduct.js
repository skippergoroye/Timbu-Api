"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddDescriptionToProduct1749294088979 = void 0;
class AddDescriptionToProduct1749294088979 {
    constructor() {
        this.name = 'AddDescriptionToProduct1749294088979';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }
}
exports.AddDescriptionToProduct1749294088979 = AddDescriptionToProduct1749294088979;
//# sourceMappingURL=1749294088979-AddDescriptionToProduct.js.map
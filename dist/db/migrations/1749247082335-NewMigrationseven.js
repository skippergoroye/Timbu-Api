"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationseven1749247082335 = void 0;
class NewMigrationseven1749247082335 {
    constructor() {
        this.name = 'NewMigrationseven1749247082335';
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
exports.NewMigrationseven1749247082335 = NewMigrationseven1749247082335;
//# sourceMappingURL=1749247082335-NewMigrationseven.js.map
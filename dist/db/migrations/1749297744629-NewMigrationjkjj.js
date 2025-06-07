"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationjkjj1749297744629 = void 0;
class NewMigrationjkjj1749297744629 {
    constructor() {
        this.name = 'NewMigrationjkjj1749297744629';
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
exports.NewMigrationjkjj1749297744629 = NewMigrationjkjj1749297744629;
//# sourceMappingURL=1749297744629-NewMigrationjkjj.js.map
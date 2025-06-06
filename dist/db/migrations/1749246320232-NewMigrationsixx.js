"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationsixx1749246320232 = void 0;
class NewMigrationsixx1749246320232 {
    constructor() {
        this.name = 'NewMigrationsixx1749246320232';
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
exports.NewMigrationsixx1749246320232 = NewMigrationsixx1749246320232;
//# sourceMappingURL=1749246320232-NewMigrationsixx.js.map
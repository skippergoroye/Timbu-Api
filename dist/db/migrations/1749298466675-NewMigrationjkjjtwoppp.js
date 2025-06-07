"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationjkjjtwoppp1749298466675 = void 0;
class NewMigrationjkjjtwoppp1749298466675 {
    constructor() {
        this.name = 'NewMigrationjkjjtwoppp1749298466675';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
    }
}
exports.NewMigrationjkjjtwoppp1749298466675 = NewMigrationjkjjtwoppp1749298466675;
//# sourceMappingURL=1749298466675-NewMigrationjkjjtwoppp.js.map
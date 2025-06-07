"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationjkjjtwo1749297833812 = void 0;
class NewMigrationjkjjtwo1749297833812 {
    constructor() {
        this.name = 'NewMigrationjkjjtwo1749297833812';
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
exports.NewMigrationjkjjtwo1749297833812 = NewMigrationjkjjtwo1749297833812;
//# sourceMappingURL=1749297833812-NewMigrationjkjjtwo.js.map
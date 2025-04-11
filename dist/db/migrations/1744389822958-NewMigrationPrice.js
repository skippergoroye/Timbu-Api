"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationPrice1744389822958 = void 0;
class NewMigrationPrice1744389822958 {
    constructor() {
        this.name = 'NewMigrationPrice1744389822958';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "description" TO "price"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "price" TO "description"`);
    }
}
exports.NewMigrationPrice1744389822958 = NewMigrationPrice1744389822958;
//# sourceMappingURL=1744389822958-NewMigrationPrice.js.map
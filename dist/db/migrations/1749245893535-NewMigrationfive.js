"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationfive1749245893535 = void 0;
class NewMigrationfive1749245893535 {
    constructor() {
        this.name = 'NewMigrationfive1749245893535';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }
}
exports.NewMigrationfive1749245893535 = NewMigrationfive1749245893535;
//# sourceMappingURL=1749245893535-NewMigrationfive.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationFour1744184085209 = void 0;
class NewMigrationFour1744184085209 {
    constructor() {
        this.name = 'NewMigrationFour1744184085209';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "imagePublicId" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "products"`);
    }
}
exports.NewMigrationFour1744184085209 = NewMigrationFour1744184085209;
//# sourceMappingURL=1744184085209-NewMigrationFour.js.map
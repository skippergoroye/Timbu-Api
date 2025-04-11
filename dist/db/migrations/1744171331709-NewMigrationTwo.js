"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewMigrationTwo1744171331709 = void 0;
class NewMigrationTwo1744171331709 {
    constructor() {
        this.name = 'NewMigrationTwo1744171331709';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "imagePublicId" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "product"`);
    }
}
exports.NewMigrationTwo1744171331709 = NewMigrationTwo1744171331709;
//# sourceMappingURL=1744171331709-NewMigrationTwo.js.map
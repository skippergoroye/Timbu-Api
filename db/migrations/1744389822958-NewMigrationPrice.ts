import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationPrice1744389822958 implements MigrationInterface {
    name = 'NewMigrationPrice1744389822958'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "description" TO "price"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" RENAME COLUMN "price" TO "description"`);
    }

}

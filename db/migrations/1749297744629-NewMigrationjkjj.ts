import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationjkjj1749297744629 implements MigrationInterface {
    name = 'NewMigrationjkjj1749297744629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "products" ADD "price" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

}

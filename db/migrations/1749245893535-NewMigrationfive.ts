import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationfive1749245893535 implements MigrationInterface {
    name = 'NewMigrationfive1749245893535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "description"`);
    }

}

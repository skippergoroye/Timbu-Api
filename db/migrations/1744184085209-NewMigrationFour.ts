import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationFour1744184085209 implements MigrationInterface {
    name = 'NewMigrationFour1744184085209'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "imagePublicId" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}

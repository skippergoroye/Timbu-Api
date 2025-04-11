import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigrationTwo1744171331709 implements MigrationInterface {
    name = 'NewMigrationTwo1744171331709'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "imageUrl" character varying NOT NULL, "imagePublicId" character varying NOT NULL DEFAULT '', CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}

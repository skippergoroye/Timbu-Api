import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigrationTwo1744171331709 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

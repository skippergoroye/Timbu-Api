import { MigrationInterface, QueryRunner } from "typeorm";
export declare class NewMigrationThree1744182553363 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

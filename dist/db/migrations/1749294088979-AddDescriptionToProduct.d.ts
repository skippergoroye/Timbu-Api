import { MigrationInterface, QueryRunner } from "typeorm";
export declare class AddDescriptionToProduct1749294088979 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}

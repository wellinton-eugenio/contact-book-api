import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableContacts1690413205632 implements MigrationInterface {
    name = 'AlterTableContacts1690413205632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_752866c5247ddd34fd05559537d"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "contacts" ALTER COLUMN "email" SET NOT NULL`);
    }

}

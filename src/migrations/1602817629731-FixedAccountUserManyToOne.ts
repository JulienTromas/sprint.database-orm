import {MigrationInterface, QueryRunner} from "typeorm";

export class FixedAccountUserManyToOne1602817629731 implements MigrationInterface {
    name = 'FixedAccountUserManyToOne1602817629731'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_72719f338bfbe9aa98f4439d2b4"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "REL_72719f338bfbe9aa98f4439d2b"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_72719f338bfbe9aa98f4439d2b4" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "account" DROP CONSTRAINT "FK_72719f338bfbe9aa98f4439d2b4"`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "REL_72719f338bfbe9aa98f4439d2b" UNIQUE ("ownerId")`, undefined);
        await queryRunner.query(`ALTER TABLE "account" ADD CONSTRAINT "FK_72719f338bfbe9aa98f4439d2b4" FOREIGN KEY ("ownerId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}

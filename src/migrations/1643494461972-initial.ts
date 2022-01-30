import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1643494461972 implements MigrationInterface {
    name = 'initial1643494461972'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` varchar(36) NOT NULL, \`firstName\` varchar(300) NOT NULL, \`lastName\` varchar(300) NOT NULL, \`email\` varchar(300) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`users\``);
    }

}

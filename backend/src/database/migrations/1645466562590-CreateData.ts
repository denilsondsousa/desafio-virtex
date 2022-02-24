import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateData1645466562590 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'data',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            generationStrategy: 'increment',
            isGenerated: true,
          },
          { name: 'slot', type: 'int', isNullable: false },
          { name: 'port', type: 'int', isNullable: false },
          { name: 'ont_id', type: 'int', isNullable: false },
          { name: 'sn', type: 'varchar', isNullable: false },
          { name: 'state', type: 'varchar', isNullable: false },
          { name: 'olt', type: 'varchar', isNullable: false },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('data');
  }
}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('data')
class Data {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  slot: number;

  @Column()
  port: number;

  @Column()
  ont_id: number;

  @Column()
  sn: string;

  @Column()
  state: string;

  @Column()
  olt: string;
}

export default Data;

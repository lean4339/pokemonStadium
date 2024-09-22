import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('text')
  name: string;
  @Column('int')
  attack: number;
  @Column('int')
  defense: number;
  @Column('int')
  hp: number;
  @Column('int')
  speed: number;
  @Column('text')
  type: string;
  @Column('text')
  imageUrl: string;
}

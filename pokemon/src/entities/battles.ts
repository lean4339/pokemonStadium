import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Pokemon } from './pokemon'; // Asegúrate de importar la entidad Pokemon

@Entity()
export class Battle {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  firstPokemonId: number;

  @Column()
  secondPokemonId: number;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'firstPokemonId' })
  @JoinColumn({ name: 'secondPokemonId' })
  secondPokemon: Pokemon;
  firstPokemon: Pokemon;

  @Column('text')
  winner: string;
}

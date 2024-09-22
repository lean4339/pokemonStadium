/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from './entities/pokemon';
import { Battle } from './entities/battles';
type Hello = {
  message: string;
};

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}
  async createPokemon(name: string): Promise<Pokemon> {
    const user: Pokemon = this.pokemonRepository.create({ name });
    return this.pokemonRepository.save(user);
  }
  async getPokemons(): Promise<Pokemon[]> {
    return this.pokemonRepository.find();
  }
  async getPokemon(id: number): Promise<Pokemon> {
    return this.pokemonRepository.findOne({
      where: {
        id: id,
      },
    });
  }
  getHello(): Hello {
    return { message: 'Hello World!' };
  }
  async battlePokemons(pokemon1Id: number, pokemon2Id: number): Promise<any> {
    const pokemon1 = await this.pokemonRepository.findOne({
      where: {
        id: pokemon1Id,
      },
    });
    const pokemon2 = await this.pokemonRepository.findOne({
      where: {
        id: pokemon2Id,
      },
    });
    if (!pokemon1 || !pokemon2) {
      return 'Pokemon not found';
    }
    const firstStep = first(pokemon1, pokemon2);
    const damage = calculateDamage(firstStep.first, firstStep.second);
    firstStep.second.hp -= damage;
    let step = 1;
    while (firstStep.first.hp > 0 && firstStep.second.hp > 0) {
      if (step % 2 != 0) {
        const damage = calculateDamage(firstStep.second, firstStep.first);
        firstStep.first.hp -= damage;
      } else {
        const damage = calculateDamage(firstStep.first, firstStep.second);
        firstStep.second.hp -= damage;
      }
      step++;
    }
    const winner = firstStep.first.hp > 0 ? pokemon1 : pokemon2;
    const battle = new Battle();
    battle.firstPokemonId = pokemon1Id;
    battle.secondPokemonId = pokemon2Id;
    battle.winner = winner.name;
    await this.battleRepository.save(battle);
    return winner;
  }
  async getBattles(): Promise<Battle[]> {
    return this.battleRepository.find();
  }
}

type FirstStep = {
  first: Pokemon;
  second: Pokemon;
};
function first(pokemon1: Pokemon, pokemon2: Pokemon): FirstStep {
  if (pokemon1.speed == pokemon2.speed) {
    return pokemon1.attack > pokemon2.attack
      ? { first: pokemon1, second: pokemon2 }
      : { first: pokemon2, second: pokemon1 };
  }
  return pokemon1.speed > pokemon2.speed
    ? { first: pokemon1, second: pokemon2 }
    : { first: pokemon2, second: pokemon1 };
}
function calculateDamage(attacker: Pokemon, defender: Pokemon): number {
  if (attacker.attack == defender.defense) return 1;
  return attacker.attack - defender.defense;
}

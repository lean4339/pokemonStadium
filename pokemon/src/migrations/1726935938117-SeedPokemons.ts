import { MigrationInterface, QueryRunner } from 'typeorm';
import * as fs from 'fs';
import * as path from 'path';

export class SeedPokemons1726935938117 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const filePath = path.join(process.cwd(), 'pokemon.json');
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    for (const pokemon of data.pokemon) {
      await queryRunner.query(
        `INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl) VALUES (null, ?, ?, ?, ?, ?, ?, ?)`,
        [
          pokemon.name,
          pokemon.attack,
          pokemon.defense,
          pokemon.hp,
          pokemon.speed,
          pokemon.type,
          pokemon.imageUrl,
        ],
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM pokemon`);
  }
}

import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Pokemon } from './entities/pokemon';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getUsers(): Promise<Pokemon[]> {
    return this.appService.getPokemons();
  }
  @Get('/battle')
  async getBattles(): Promise<any> {
    return this.appService.getBattles();
  }

  @Get('/:id')
  async getUser(id: number): Promise<Pokemon> {
    return this.appService.getPokemon(id);
  }
  @Post('/battle')
  async battlePokemons(
    @Body('pokemon1Id') pokemon1Id: number,
    @Body('pokemon2Id') pokemon2Id: number,
  ): Promise<any> {
    return this.appService.battlePokemons(pokemon1Id, pokemon2Id);
  }
}

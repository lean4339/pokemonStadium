import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon';
import { Battle } from './entities/battles';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [Pokemon, Battle],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Pokemon, Battle]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

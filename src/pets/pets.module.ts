import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { Pet } from './entities/pet.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

// import { OwnersService } from 'src/owners/owners.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetsService, PetsResolver]
})
export class PetsModule {}

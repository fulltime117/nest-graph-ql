import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { Owner } from 'src/owners/entities/owner.entity';
// import { OwnersService } from 'src/owners/owners.service';
import { Repository, TableInheritance } from 'typeorm';
import { CreatePetInput } from './dto/create-pet.input';
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petRepository: Repository<Pet>) { }

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petRepository.create(createPetInput) //newPet = new Pet()

    return this.petRepository.save(newPet)
  }

  async findAll(): Promise<Pet[]> {
    return this.petRepository.find()
  }

  fineOne(id: any): Promise<Pet> {
    return this.petRepository.findOneOrFail({where: {id}})
  }

  // getOwner(ownerId: number): Promise<Owner> {
  //   return this.ownerService.findOne(ownerId)
  // }
}

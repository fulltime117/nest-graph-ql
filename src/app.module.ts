import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm'

import { PetsModule } from './pets/pets.module';
// import { OwnersModule } from './owners/owners.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest-qraphql',
      entities: ['dist/**/entities/*.entity{.ts, .js}'],
      synchronize: true,
      autoLoadEntities: true,
      dropSchema: true
    }),
    PetsModule,
    // OwnersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }



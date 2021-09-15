import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

import { CreateUniqueID } from '../utils/CreateUniqueID';
import { HashPassword } from '../utils/HashPassword';

import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUniqueID, PrismaClient, HashPassword],
})
export class UsersModule {}

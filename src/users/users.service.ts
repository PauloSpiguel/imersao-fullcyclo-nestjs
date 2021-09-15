import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';

import { PrismaClient, User } from '@prisma/client';
import { CreateUniqueID } from '../utils/CreateUniqueID';
import { HashPassword } from '../utils/HashPassword';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaClient,
    private createUniqueID: CreateUniqueID,
    private hashPassword: HashPassword,
  ) {}

  async create({ email, name, password, admin }: CreateUserDto): Promise<User> {
    const { uuid } = this.createUniqueID.execute();

    const { hashed_password } = await this.hashPassword.execute({ password });

    return await this.prisma.user.create({
      data: {
        id: uuid,
        password: hashed_password,
        email,
        name,
        admin,
      },
    });
  }

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

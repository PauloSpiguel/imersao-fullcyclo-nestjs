import { CreateUserDto } from './dto/createUserDto';
import { UpdateUserDto } from './dto/updateUserDto';
import { PrismaClient, User } from '@prisma/client';
import { CreateUniqueID } from '../utils/CreateUniqueID';
import { HashPassword } from '../utils/HashPassword';
export declare class UsersService {
    private prisma;
    private createUniqueID;
    private hashPassword;
    constructor(prisma: PrismaClient, createUniqueID: CreateUniqueID, hashPassword: HashPassword);
    create({ email, name, password, admin }: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}

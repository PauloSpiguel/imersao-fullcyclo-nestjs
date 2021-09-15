import { User } from '@prisma/client';

export class CreateUserDto implements User {
  id: string;
  name: string;
  email: string;
  password: string;
  admin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

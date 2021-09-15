"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const CreateUniqueID_1 = require("../utils/CreateUniqueID");
const HashPassword_1 = require("../utils/HashPassword");
let UsersService = class UsersService {
    constructor(prisma, createUniqueID, hashPassword) {
        this.prisma = prisma;
        this.createUniqueID = createUniqueID;
        this.hashPassword = hashPassword;
    }
    async create({ email, name, password, admin }) {
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
    async findAll() {
        return this.prisma.user.findMany();
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient,
        CreateUniqueID_1.CreateUniqueID,
        HashPassword_1.HashPassword])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map
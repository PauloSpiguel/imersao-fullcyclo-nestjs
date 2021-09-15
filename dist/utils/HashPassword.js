"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashPassword = void 0;
const bcrypt_1 = require("bcrypt");
class HashPassword {
    constructor() { }
    async execute({ password }) {
        const hashed_password = await (0, bcrypt_1.hash)(password, 10);
        return { hashed_password };
    }
}
exports.HashPassword = HashPassword;
//# sourceMappingURL=HashPassword.js.map
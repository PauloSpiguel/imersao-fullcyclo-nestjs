"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUniqueID = void 0;
const uuid_1 = require("uuid");
class CreateUniqueID {
    constructor() { }
    execute() {
        const uuid = (0, uuid_1.v4)();
        return { uuid };
    }
}
exports.CreateUniqueID = CreateUniqueID;
//# sourceMappingURL=CreateUniqueID.js.map
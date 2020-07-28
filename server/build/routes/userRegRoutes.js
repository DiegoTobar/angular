"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRegController_1 = __importDefault(require("../controllers/userRegController"));
class UserReg {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userRegController_1.default.list);
        this.router.get('/:id', userRegController_1.default.getOne);
        this.router.post('/', userRegController_1.default.create);
        this.router.put('/:id', userRegController_1.default.update);
        this.router.delete('/:id', userRegController_1.default.delete);
        this.router.post('/login/', userRegController_1.default.login);
    }
}
exports.default = new UserReg().router;

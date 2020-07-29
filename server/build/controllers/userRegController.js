"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserRegController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'linting user'});
            const users = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(users);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'this is user' + req.params.id});
            const { id } = req.params;
            const users = yield database_1.default.query('SELECT * FROM usuarios WHERE cedula = ?', [id]);
            if (users.length > 0) {
                return res.json(users[0]);
            }
            res.status(404).json({ text: "the user doesn't exists" });
            /* console.log(users);
            res.json({text: 'user founded'}); */
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'creating user'});
            console.log(req.body);
            yield database_1.default.query('INSERT INTO usuarios set ?', [req.body]);
            res.json({ message: 'User Saved' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'deleting user' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM usuarios WHERE cedula=?', [id]);
            res.json({ message: 'User was deleted' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'updating user' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuarios SET ? WHERE cedula = ?', [req.body, id]);
            res.json({ message: 'The user was updated' });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'updating user' + req.params.id});
            const { id } = req.params;
            console.log(id);
            const respuesta = yield database_1.default.query('select * from usuarios  WHERE cedula = ?', [id]);
            res.json({ respuesta });
        });
    }
}
const userRegController = new UserRegController;
exports.default = userRegController;

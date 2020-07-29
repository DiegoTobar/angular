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
const jwt = require('jsonwebtoken');
// var nJwt = require('njwt');
const database_1 = __importDefault(require("../database"));
const llave = 'secreta';
class UserRegController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({tex:'linting user'});
            const users = yield database_1.default.query('SELECT * FROM usuarios');
            res.json(users);
        });
    }
    getToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log("asdasd");
            const { token } = req.body;
            // console.log(token);
            jwt.verify(token, llave, function (err, nombre, correo) {
                if (err) {
                    res.status(401).send({
                        error: 'Token inválido'
                    });
                }
                else {
                    res.send({
                        nombre: nombre,
                        correo: correo
                    });
                }
            });
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, contra } = req.body;
            const users = yield database_1.default.query('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ? ', [correo, contra]);
            if (users.length == 1) {
                console.log("users");
                console.log(users);
                const payload = {
                    nombre: users[0].nombre,
                    correo: correo
                };
                const token = jwt.sign(payload, llave, {
                    expiresIn: 740
                });
                // const token = jwt.JsonWebToken.Encode(payload, llave, jwt.JwtHashAlgorithm.HS256);
                res.json({
                    mensaje: 'Autenticación correcta',
                    token: token
                });
                // console.log("aqui");
                // return res.json(users);
                // const token = jwt.sign(user, JWT_SECRETKEY);
            }
            res.status(403).json({ text: "el usuario no existe" });
            /* console.log(users);
            res.json({text: 'user founded'}); */
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.json({ tex: 'creating user' });
            //console.log(req.body);
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
}
const userRegController = new UserRegController;
exports.default = userRegController;

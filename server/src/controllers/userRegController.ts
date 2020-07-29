import { Request, Response, query } from 'express';
const jwt = require('jsonwebtoken');
// var nJwt = require('njwt');


import pool from '../database';
const llave = 'secreta';

class UserRegController {

    public async list(req: Request, res: Response) {
        //res.json({tex:'linting user'});
        const users = await pool.query('SELECT * FROM usuarios');
        res.json(users);
    }

    public async getToken(req: Request, res: Response) {
        // console.log("asdasd");
        const { token } = req.body;
        // console.log(token);
        jwt.verify(token, llave, function(err, nombre, correo) {
            if (err) {
              res.status(401).send({
                error: 'Token inválido'
              })
            } else {
              res.send({
                nombre: nombre, 
                correo: correo
              })
            }
          })
    }

    public async login(req: Request, res: Response) {
        const { correo, contra } = req.body;
        console.log(correo);
        console.log(contra);
        const users = await pool.query('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ? ', [correo, contra]);
        
        if (users.length == 1) {console.log("users");console.log(users);
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
    }

    public async create(req: Request, res: Response): Promise<void> {
        res.json({ tex: 'creating user' });
        //console.log(req.body);
        await pool.query('INSERT INTO usuarios set ?', [req.body])
        res.json({ message: 'User Saved' });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        //res.json({tex:'deleting user' + req.params.id});
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE cedula=?', [id]);
        res.json({ message: 'User was deleted' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        //res.json({tex:'updating user' + req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE cedula = ?', [req.body, id]);
        res.json({ message: 'The user was updated' });

    }
}

const userRegController = new UserRegController;
export default userRegController;
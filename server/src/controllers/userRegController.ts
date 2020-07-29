import { Request, Response, query } from 'express';


import pool from '../database';

class UserRegController {

    public async list(req: Request, res: Response){
        //res.json({tex:'linting user'});
        const users = await pool.query('SELECT * FROM usuarios');
        res.json(users);
    }

    public async getOne(req: Request, res: Response): Promise<any>{
        //res.json({tex:'this is user' + req.params.id});
        const { id } = req.params;
        const users = await pool.query('SELECT * FROM usuarios WHERE cedula = ?',[id]);
        if (users.length > 0) {
            return res.json(users[0]);
        }
        res.status(404).json({text:"the user doesn't exists"});
        /* console.log(users);
        res.json({text: 'user founded'}); */
    } 

    public async create(req: Request, res: Response): Promise<void>{
        //res.json({tex:'creating user'});
        console.log(req.body);
        await pool.query('INSERT INTO usuarios set ?', [req.body])
        res.json({message:'User Saved'});
    }

    public async delete(req: Request, res: Response):Promise<void>{
        //res.json({tex:'deleting user' + req.params.id});
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios WHERE cedula=?',[id]);
        res.json({message:'User was deleted'});


    }

    public async update(req: Request, res: Response): Promise<void>{
        //res.json({tex:'updating user' + req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE usuarios SET ? WHERE cedula = ?',[req.body,id]);
        res.json({message:'The user was updated'});

    }

    public async login(req: Request, res: Response): Promise<void>{
        //res.json({tex:'updating user' + req.params.id});
        const { id } = req.params;
        console.log(id);
        const respuesta = await pool.query('select * from usuarios  WHERE cedula = ?',[id]);
        res.json({respuesta});

    }
    
    
}

const userRegController = new UserRegController;
export default userRegController;
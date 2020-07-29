import express, { Router } from 'express';
import userRegController from '../controllers/userRegController';

class UserReg {

    router : Router = Router ();

    constructor () {
        this.config();

    }

    config(){
       
        this.router.get('/', userRegController.list);
        this.router.get('/:id', userRegController.getOne);
        this.router.post('/', userRegController.create);
        this.router.put('/:id',userRegController.update);
        this.router.delete('/:id',userRegController.delete);

        this.router.post('/login/',userRegController.login);
        

    }

    
}
export default new UserReg().router;
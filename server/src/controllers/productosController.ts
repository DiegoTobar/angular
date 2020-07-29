
import { Request, Response } from 'express';


import pool from '../database';

class ProductosController {

    public async list(req: Request, res: Response): Promise<void> {
        const producto = await pool.query('SELECT idArticulo, categorias.nombre as categoria, descripcion, descuento, imagen, productos.nombre, precio, stock FROM productos join categorias on Categorias_idCategoria = idCategoria');
        res.json(producto);
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const producto = await pool.query('SELECT categorias.nombre as categoria, descripcion, descuento, imagen, productos.nombre, precio, stock FROM productos join categorias on Categorias_idCategoria = idCategoria WHERE idArticulo = ?', [id]);
        console.log(producto.length);
        if (producto.length > 0) {
            return res.json(producto[0]);
        }
        res.status(404).json({ text: "El producto no existe" });
    }

    public async create(req: Request, res: Response): Promise<void> {
        const result = await pool.query('INSERT INTO productos set ?', [req.body]);
        res.json({ message: 'Producto Saved' });
    }

    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const oldProducto = req.body;
        await pool.query('UPDATE productos set ? WHERE idArticulo= ?', [req.body, id]);
        res.json({ message: "The producto was Updated" });
    }

    public async delete(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        await pool.query('DELETE FROM productos WHERE idArticulo = ?', [id]);
        res.json({ message: "The producto was deleted" });
    }
}

const productosController = new ProductosController;
export default productosController;
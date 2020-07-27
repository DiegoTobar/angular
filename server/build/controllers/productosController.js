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
class ProductosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const producto = yield database_1.default.query('SELECT categorias.nombre as categoria, descripcion, descuento, imagen, productos.nombre, precio, stock FROM productos join categorias on Categorias_idCategoria = idCategoria');
            res.json(producto);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const producto = yield database_1.default.query('SELECT categorias.nombre as categoria, descripcion, descuento, imagen, productos.nombre, precio, stock FROM productos join categorias on Categorias_idCategoria = idCategoria WHERE idArticulo = ?', [id]);
            console.log(producto.length);
            if (producto.length > 0) {
                return res.json(producto[0]);
            }
            res.status(404).json({ text: "El producto no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield database_1.default.query('INSERT INTO productos set ?', [req.body]);
            res.json({ message: 'Producto Saved' });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const oldProducto = req.body;
            yield database_1.default.query('UPDATE productos set ? WHERE idArticulo= ?', [req.body, id]);
            res.json({ message: "The producto was Updated" });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM productos WHERE idArticulo = ?', [id]);
            res.json({ message: "The producto was deleted" });
        });
    }
}
const productosController = new ProductosController;
exports.default = productosController;

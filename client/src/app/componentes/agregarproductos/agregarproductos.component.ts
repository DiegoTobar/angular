import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/Producto';
import  { ProductosService } from '../../services/productos.service'
import { ActivatedRoute, Route, Router } from '@angular/router';
@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregarproductos.component.html',
  styleUrls: ['./agregarproductos.component.less']
})
export class AgregarproductosComponent implements OnInit {

  producto: Producto = {
    idArticulo: 0,
    nombre: '',
    precio: null,
    categoria: '',
    descuento: 0,
    imagen: '',
    stock: null,
    descripcion: ''

  };
  edit : boolean = false;

  constructor(private productoService: ProductosService,
    private router: Router,
    private activedRoute: ActivatedRoute
    ) { }


  ngOnInit(): void {
      const parametro = this.activedRoute.snapshot.params;
      if (parametro.idArticulo){
      this.productoService.getProducto(parametro.idArticulo)
      .subscribe(
        res => {
          console.log(res);
          this.producto = res;
          this.edit = true;
        },
        err => console.log(err)
      )
      }
    }
  
  guardarNuevoProducto(){
    this.productoService.saveProducto(this.producto).
    subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/productos']);
      },
      err => console.log(err)
    )
  }
  updateProducto(){
    this.productoService.updateProducto(this.producto.idArticulo,this.producto)
    .subscribe(res => {
      console.log(res);
      this.router.navigate(['/productos']);
    },
    err => console.log(err)
    )
  }

}

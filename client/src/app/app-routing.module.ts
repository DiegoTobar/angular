import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from "./componentes/productos/productos.component"; 
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { AgregarproductosComponent } from "./componentes/agregarproductos/agregarproductos.component";
import { AdminComponent} from "./componentes/admin/admin.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { CarroComponent} from "./componentes/carro/carro.component";
import { from } from 'rxjs';

const routes: Routes = [
  { path: "productos", component: ProductosComponent },
  { path: "productos/agregar", component: AgregarproductosComponent },
  { path: "usuarios", component: UsuariosComponent },
  { path: "admin", component: AdminComponent },
  { path: "", component: PrincipalComponent },
  { path: "productos/editar/:idArticulo", component: AgregarproductosComponent},
  { path: "carro", component: CarroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

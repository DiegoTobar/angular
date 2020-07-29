import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductosComponent } from "./componentes/productos/productos.component";
import { UsuariosComponent } from "./componentes/usuarios/usuarios.component";
import { AgregarproductosComponent } from "./componentes/agregarproductos/agregarproductos.component";
import { AdminComponent } from "./componentes/admin/admin.component";
import { PrincipalComponent } from "./componentes/principal/principal.component";
import { CarroComponent } from "./componentes/carro/carro.component";
import { LoginComponent } from "./componentes/login/login.component";
import { RegistrarComponent } from "./componentes/registrar/registrar.component"
import { from } from 'rxjs';
import { AuthGuard } from './guards/auth.guard'

import { UsuariosListComponent } from "./componentes/usuarios-list/usuarios-list.component";


const routes: Routes = [
<<<<<<< HEAD
  { path: "productos", component: ProductosComponent , canActivate: [AuthGuard]},
  { path: "productos/agregar", component: AgregarproductosComponent , canActivate: [AuthGuard]},
  { path: "usuarios", component: UsuariosComponent , canActivate: [AuthGuard]},
  { path: "admin", component: AdminComponent, canActivate: [AuthGuard] },
=======
  { path: "productos", component: ProductosComponent },
  { path: "productos/agregar", component: AgregarproductosComponent },
  { path: "usuarios", component: UsuariosListComponent },
  { path: "admin", component: AdminComponent },
<<<<<<< HEAD
=======
=======
  { path: "usuarios", component: UsuariosComponent },
  { path: "admin", component: AdminComponent,},
>>>>>>> sebastian2
>>>>>>> master
>>>>>>> 3c900e8952cb39946bbb7e022628e02a202d33b5
  { path: "", component: PrincipalComponent },
  { path: "productos/editar/:idArticulo", component: AgregarproductosComponent, canActivate: [AuthGuard] },
  { path: "carro", component: CarroComponent , canActivate: [AuthGuard]},
  { path: "productos/editar/:idArticulo", component: AgregarproductosComponent , canActivate: [AuthGuard]},

  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "registro", component: RegistrarComponent, pathMatch: "full" }
  // { path: "**", component: Page404Component }
  // { path: "usuarios/list",component: UsuariosListComponent},
  // { path: "usuarios/edit/:id",component: UsuariosComponent},
  // { path: "usuarios/register",component: LoginComponent},
  // { path: "usuarios/login",component: LoginComponent},
  // { path: "checkout", component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

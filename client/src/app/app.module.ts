import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { AgregarproductosComponent } from './componentes/agregarproductos/agregarproductos.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { ProductosService } from './services/productos.service';

import { PrincipalComponent } from './componentes/principal/principal.component';
import { CarroComponent } from './componentes/carro/carro.component';
import { DataTablesModule } from 'angular-datatables';
import { UsuariosListComponent } from './componentes/usuarios-list/usuarios-list.component';

import { UsuariosService } from './services/usuarios.service';
import { LoginComponent } from './componentes/login/login.component';
<<<<<<< HEAD
import { ComprasService } from './services/compras.service';
=======
import { RegistrarComponent } from './componentes/registrar/registrar.component';

import { CookieService } from 'ngx-cookie-service';
>>>>>>> sebastian2

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    UsuariosComponent,
    AgregarproductosComponent,
    AdminComponent,
    PrincipalComponent,
    CarroComponent,
    UsuariosListComponent,
    LoginComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    ProductosService,
<<<<<<< HEAD
    UsuariosService,
    ComprasService
=======
    UsuariosService, 
    CookieService
>>>>>>> sebastian2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

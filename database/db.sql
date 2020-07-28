create database tienda;

use tienda;

create table productos(
  idArticulo smallint NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) BINARY  NOT NULL  ,
  precio DOUBLE  NOT NULL  ,
  referencia VARCHAR(50),
  descuento DOUBLE  NOT NULL  ,
  imagen VARCHAR(150)  NOT NULL  ,
  stock INT UNSIGNED  NOT NULL  ,
  descripcion TEXT  NULL 
);
describe tienda;

insert into usuarios values (12234234,miguel )

CREATE TABLE Usuarios (
  cedula INT   NOT NULL   AUTO_INCREMENT,
  nombre VARCHAR(20)  NOT NULL  ,
  correo VARCHAR(30) NOT NULL  ,
  contrasena VARCHAR(30) NOT NULL  ,
  rol INT   NOT NULL  ,
  apellido VARCHAR(20)  NOT NULL  ,
  telefono VARCHAR(10)  NULL    ,
PRIMARY KEY(cedula));
create database servientrega;
use servientrega;

CREATE TABLE usuario_enviador(
id INT(11) PRIMARY KEY,
nombre VARCHAR(50),
apellido VARCHAR(50),
telefono VARCHAR(50),
direccion VARCHAR(50),
municipio VARCHAR(50));

CREATE TABLE usuario_receptor(
id INT(11) PRIMARY KEY,
nombre VARCHAR(50),
apellido VARCHAR(50),
telefono VARCHAR(50),
direccion VARCHAR(50),
municipio VARCHAR(50));

CREATE TABLE paquete(
id INT(11) PRIMARY KEY,
tamaño VARCHAR(50),
peso VARCHAR(50));

CREATE TABLE pais(
id INT(11) PRIMARY KEY,
nombre VARCHAR(50));

CREATE TABLE departamento(
id INT(11) PRIMARY KEY,
nombre VARCHAR(50),
id_pais INT(11),
FOREIGN KEY (id_pais) REFERENCES pais(id));

CREATE TABLE municipio(
id INT(11) PRIMARY KEY,
nombre VARCHAR(50),
id_departamento INT(11),
FOREIGN KEY (id_departamento) REFERENCES departamento(id));

CREATE TABLE direccion_Inicial(
id INT(11) PRIMARY KEY,
direccion VARCHAR(50),
descripcion VARCHAR(50));

CREATE TABLE direccion_Final(
id INT(11) PRIMARY KEY,
direccion VARCHAR(50),
descripcion VARCHAR(50));

CREATE TABLE envio(
id INT(11) PRIMARY KEY,
id_paquete INT(11),
id_enviador INT(11),
id_receptor INT(11),
id_dInicial INT(11),
id_dFinal INT(11),
ubicacion_actual VARCHAR(50),
FOREIGN KEY (id_paquete) REFERENCES paquete(id),
FOREIGN KEY (id_enviador) REFERENCES usuario_enviador(id),
FOREIGN KEY (id_receptor) REFERENCES usuario_receptor(id),
FOREIGN KEY (id_dInicial) REFERENCES direccion_Inicial(id),
FOREIGN KEY (id_dFinal) REFERENCES direccion_final(id));








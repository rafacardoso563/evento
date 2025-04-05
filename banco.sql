create database eventoslista;

use eventoslista;


create table eventos (
            id int primary key not null auto_increment,
    nome varchar(255) not null, 
    dia varchar(255) not null,
    locall varchar(255) not null, 
    descricao varchar(255),
   
);


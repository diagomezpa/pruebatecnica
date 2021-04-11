CREATE DATABASE database_tienda;

USE database_tienda;

CREATE TABLE product( 
    id INT(11) NOT NULL auto_increment primary key, 
    productname VARCHAR(200) NOT NULL, 
    count INT(11) NOT null,
    ima VARCHAR(200) NOT NULL);

CREATE TABLE users (
     
     id INT(11) NOT NULL auto_increment primary key,
     username VARCHAR(50) NOT NULL,
     email VARCHAR(200) NOT NULL UNIQUE,
     password VARCHAR(200) NOT NULL


);

CREATE TABLE orders(

    id INT(11) NOT NULL auto_increment primary key,
    userid INT (11),
    CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES users(id)

);

CREATE TABLE orders_has_product(

    
    orderid INT (11) NOT NULL,
    productid INT(11) NOT NULL,
    units INT(11) NOT NULL,
    CONSTRAINT fk_ordenes_has_productos_productos1 FOREIGN KEY (productid) REFERENCES product(id),
    UNIQUE(orderid,productid)

);


DESCRIBE orders;

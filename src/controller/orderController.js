const pool = require('../database');
const express = require('express');

const req = express.response;

class OrderController {

    async list(req, res) {
        //res.send('Helooesdeproducnto');
        const pro = await pool.query('SELECT * FROM orders');
        res.json(pro);

    }

    // ordenes por usuario
    async ordersbyUser(req, res) {

        const { id } = req.params;
        console.log("pruebas " + id);
        const lista = await pool.query('SELECT * FROM orders WHERE userid = ?', [id]);

        console.log("pruebas");
        res.json(lista);

    }



    //productos de la orden

    async producsbyorder(req, res) {
        const { id } = req.params;
        console.log("llsabasd hasdf jassdnf aka df " + id);
        const lista2 = await pool.query('SELECT * FROM orders_has_product WHERE orderid= ? ', [id]);
        console.log("listas " + lista2);
        //const lista = await pool.query('SELECT * FROM product WHERE id= ?', [lista2]);
        res.json(lista2[0]);

    }




    async create(req, res) {
        console.log(req.body);
        await pool.query('INSERT INTO orders set ?', [req.body]);
        res.json({ text: 'creando orders' });
    }

    async agregarproducto(req, res) {
        console.log("agregando producn");

        await pool.query('INSERT INTO orders_has_product set ?', [req.body]);
        res.json({ text: 'creando orders' });

    }

    async update(req, res) {
        const { id } = req.params;
        const oldGame = req.body;
        console.log('dskdnfas d');
        console.log(oldGame);
        await pool.query('UPDATE orders set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The producto was Updated" });
    }


    async delete(req, res) {
        const { id } = req.params;
        await pool.query('DELETE FROM orders WHERE id = ?', [id]);
        res.json({ message: "The order was deleted" });
    }
}

//export const ProductoController = new ProductoController();
module.exports = new OrderController();
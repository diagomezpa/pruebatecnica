const pool = require('../database');
const express = require('express');

const req = express.response;

class ProductoController {

    async list(req, res) {
        //res.send('Helooesdeproducnto');
        const pro = await pool.query('SELECT * FROM product');
        res.json(pro);

    }



    async getOne(req, res) {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM product WHERE id = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }


    async create(req, res) {
        console.log(req.body);
        await pool.query('INSERT INTO product set ?', [req.body]);
        res.json({ text: 'creando producto' });
    }

    async update(req, res) {
        const { id } = req.params;
        const oldGame = req.body;
        console.log('dskdnfas d');
        console.log(oldGame);
        await pool.query('UPDATE product set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The producto was Updated" });
    }


    async delete(req, res) {
        const { id } = req.params;
        await pool.query('DELETE FROM product WHERE id = ?', [id]);
        res.json({ message: "The product was deleted" });
    }
}

//export const ProductoController = new ProductoController();
module.exports = new ProductoController();
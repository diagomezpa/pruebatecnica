const pool = require('/home/diego/Escritorio/proyectospersonales/prueba-tecnica/src/database.js');
const express = require('express');

const req = express.response;

class UserController {



    async list(req, res) {
        //res.send('Helooesdeproducnto');
        const pro = await pool.query('SELECT * FROM users');
        res.json(pro);

    }


    async getbyemail(req, res) {
        const { email } = req.params;
        const games = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    async getbyid(req, res) {
        const { id } = req.params;
        const games = await pool.query('SELECT * FROM users WHERE email = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "The game doesn't exits" });
    }

    async create(req, res) {
        console.log(req.body);
        await pool.query('INSERT INTO users set ?', [req.body]);
        res.json({ text: 'creando producto' });
    }

    async update(req, res) {
        const { email } = req.params;
        const oldquery = req.body;
        console.log('dskdnfas d');
        console.log(oldquery);
        await pool.query('UPDATE users set ? WHERE email = ?', [req.body, email]);
        res.json({ message: "The producto was Updated" });
    }



}

module.exports = new UserController();
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
        let respuesta = [];
        const { id } = req.params;
        //console.log("pruebas " + id);
        let row = [];
        const listadeordenes = await pool.query('SELECT id FROM orders WHERE userid = ?', [id]);

        Object.keys(listadeordenes).forEach(function(key) {
            row.push(listadeordenes[key].id);

        });
        console.log(row);
        for (let i = 0; i < row.length; i++) {
            console.log("pasada i " + i + row[i]);
            let row2 = [];
            let row3 = [];
            //console.log("row1"+row[i]);
            let lista2 = await pool.query('SELECT * FROM orders_has_product WHERE orderid= ? ', [row[i]]);
            Object.keys(lista2).forEach(async function(key) {
                let dict = {}
                    //console.log(lista2[key].productid);

                let lista3 = await pool.query('SELECT productname FROM product WHERE id= ? ', [lista2[key].productid]);
                Object.keys(lista3).forEach(async function(key) {

                    await row3.push(lista3[key].productname);

                });
                dict["numberOrder"] = lista2[key].orderid;
                dict["listArticles"] = row3;
                //console.log(dict);
                respuesta.push(dict);
                console.log(respuesta);

            });
        }


        //console.log(row)
        //console.log("pruebas");
        res.json(respuesta);

    }


    //productos de la orden

    async producsbyorder(req, res) {
        const { id } = req.params;

        const lista2 = await pool.query('SELECT * FROM orders_has_product WHERE orderid= ? ', [id]);
        console.log("listas " + lista2);
        //const lista = await pool.query('SELECT * FROM product WHERE id= ?', [lista2]);
        res.json(lista2[0]);

    }




    async create(req, res) { // inserta al tiempo en orden y en ordenproduccto

        console.log(req.body["idUser"]);
        const articleArray = req.body["idProducts"];
        console.log(articleArray.length);

        await pool.query('INSERT INTO orders (userid) VALUES (?)', [req.body["idUser"]]);
        let currenlyOrder = await pool.query('SELECT id FROM orders ORDER BY id DESC LIMIT 1  ');

        /* pool.query('SELECT id FROM orders ORDER BY id DESC LIMIT 1 ', (q_err, q_res) => {
            if (q_err) return next(q_err);
            console.log(q_res[0]["id"])

        });
 */

        console.log("orden actual " + currenlyOrder[0]["id"]);

        for (let i = 0; i < articleArray.length; i++) {
            await pool.query('INSERT INTO orders_has_product (productid,orderid,units) VALUES (?,?,?)', [articleArray[i], currenlyOrder[0]["id"], 1]);
        }
        res.json(currenlyOrder[0]["id"]);
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
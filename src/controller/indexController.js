class IndexController {

    index(req, res) {
        //res.send('Heloo');
        res.json({ text: 'api' });

    }
}


module.exports = new IndexController();
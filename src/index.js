const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');


//initializations
const app = express();

//settings 
app.set('port', 4000);

//Middlewares
app.use(morgan('dev'));
//app.use(bodyParser.json()); // body en formato json
//app.use(bodyParser.urlencoded({ extended: false })); //body formulario

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//global Variables

//routes

app.use(require('./routes/index'));
app.use('/user', require('./routes/user'));
app.use('/producto', require('./routes/productos'));
app.use('/order', require('./routes/order'));
//ppubllic 

//starting server
app.listen(app.get('port'), () => {
    console.log('Server arriba ', app.get('port'));
});
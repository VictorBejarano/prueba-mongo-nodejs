const express = require('express');
const path = require('path');//modulo de direcciones

//Inicializaciones
const app = express();

//Configuraciones

app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname,'views'));//establece la ruta de view sin importar SO

//Middlewares funciones que se 
//ejecutan a medida que llegan peticiones

app.use(express.urlencoded({extended: false}));

//Variables Globales

//Routes

app.get('/', (req, res) =>{
    res.send('hello world');
});

//Archivos Estaticos

app.use(express.static(path.join( __dirname,'public')));//Establece ruta de la carpeta public

module.exports = app;
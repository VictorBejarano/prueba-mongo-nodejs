const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');//modulo de direcciones

//Inicializaciones
const app = express();

//Configuraciones

app.set('port', process.env.PORT || 4000);
app.set('views', path.join( __dirname,'views'));//establece la ruta de view sin importar SO
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')
//Middlewares funciones que se 
//ejecutan a medida que llegan peticiones

app.use(express.urlencoded({extended: false}));

//Variables Globales

//Routes

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

//Archivos Estaticos

app.use(express.static(path.join( __dirname,'public')));//Establece ruta de la carpeta public

module.exports = app;
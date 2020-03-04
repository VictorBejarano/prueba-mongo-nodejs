const app = require('./server');

//Escuchando desde el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
//Modulos
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
// Variables
app.set('port', 8081);

//Rutas/controladores por lógica
require("./public/routes/rusuarios.js")(app); // (app, param1, param2, etc.)
require("./public/routes/rcanciones.js")(app); // (app, param1, param2, etc.)
app.get('/promo*', function (req, res) {
    res.send('Respuesta patrón promo* ');
});
//Lanzar el servidor
app.listen(app.get('port'),function(){
    console.log("Servidor activo");
});
module.exports = function(app, swig) {
    app.get('/autores/agregar', function (req, res) {
        if(typeof(req.query.nombre) == "undefined")
            console.log("<Nombre> no enviado en la peticion");
        if(typeof(req.query.rol) == "undefined")
            console.log("<Rol> no enviado en la peticion");
        if(typeof(req.query.grupo) == "undefined")
            console.log("<Grupo> no enviado en la peticion");
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });
};
app.get('/autores/:id', function (req, res) {
    let respuesta = 'id: ' + req.params.id;
    res.send(respuesta);
});

module.exports = function (app, swig) {
    app.get("/autores", function (req, res) {
        let autores = [{
            "nombre": "Mac Miller",
            "grupo" : "Mac Miller",
            "rol": "Cantante"
        },{
            "nombre": "Ringo Star",
            "grupo" : "Beattles",
            "rol": "Bateria"
        }, {
            "nombre": "Dimitri Vegas",
            "grupo" : "Dimitri Vegas & Like Mike",
            "rol": "Teclista"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Lista de autores',
            canciones:  autores
        });
        res.send(respuesta);
    });

};
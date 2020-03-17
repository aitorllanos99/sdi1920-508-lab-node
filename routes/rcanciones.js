module.exports = function (app, swig) {
        app.get("/canciones", function (req, res) {
            let canciones = [{
                "nombre": "Blue Slide Park",
                "precio": "1.2"
            },{
                "nombre": "Astroworld",
                "precio": "1.3"
            }, {
                "nombre": "Beepongs and bentleys",
                "precio": "1.1"
            }];

            let respuesta = swig.renderFile('views/btienda.html', {
                vendedor: 'Tienda de canciones',
                canciones:  canciones
            });
            res.send(respuesta);
        });

};

module.exports = function(app, swig) {
    app.get('/canciones/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/bagregar.html', {});
        res.send(respuesta);
    });
};
app.get('/canciones/:id', function (req, res) {
    let respuesta = 'id: ' + req.params.id;
    res.send(respuesta);
});
app.get('/canciones/:genero/:id', function (req, res) {
    let respuesta = 'id: ' + req.params.id + '<br>'
        + 'Género: ' + req.params.genero;
    res.send(respuesta);
});

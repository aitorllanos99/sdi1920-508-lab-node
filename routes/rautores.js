module.exports = function(app, swig) {
    app.get('/autores/agregar', function (req, res) {
        if(req.nombre)
        let respuesta = swig.renderFile('views/autores-agregar.html', {});
        res.send(respuesta);
    });
};
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
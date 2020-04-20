module.exports = function(app, swig) {

    app.get("/autores", function(req, res) {
        let autores= [{
            "nombre": "Mac miller",
            "grupo": "Dope group",
            "rol": "Cantante"
        },{
            "nombre": "Ringo Star",
            "grupo": "Beattles",
            "rol": "Bateria"
        }, {
            "nombre": "Dimitri Vegas",
            "grupo": "Dimitri Vegas & Like Mike",
            "rol": "Teclista"
        }];

        let respuesta = swig.renderFile('views/autores.html', {
            vendedor: 'Autores',
            autores: autores
        });
        res.send(respuesta);
    });
    app.get("/autores/agregar", function(req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {

        });
        res.send(respuesta);
    });

    app.post("/autor", function (req,res) {
        let respuesta =  "Autor agregado<br>";
        console.log(typeof (req.body.nombre) != "undefined");
        console.log(req.body.nombre );
        if(typeof (req.body.nombre) != "undefined")
            respuesta += "Nombre:" +req.body.nombre + "<br>";
        else
            respuesta += "Nombre: No no enviado en la petición"+ "<br>";
        if(typeof (req.body.grupo) != "undefined")
            respuesta += "Grupo:" +req.body.grupo + "<br>";
        else
            respuesta += "Grupo: No no enviado en la petición"+ "<br>";
        if(typeof (req.body.rol) != "undefined")
            respuesta += "Rol:" +req.body.rol + "<br>";
        else
            respuesta += "Rol: No no enviado en la petición"+ "<br>";
        res.send( respuesta);
    });

};

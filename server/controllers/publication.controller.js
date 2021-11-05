const Publication = require("../models/publication.model")

let response = {
    msg: "",
    exito: false,
}

exports.create = function(req, res) {
    let publication = new Publication({
        material: req.body.material,
        //prodImage: {},
        quantity: req.body.quantity,
        frecuency: req.body.frecuency,
        address: req.body.address,
        city: req.body.city,
        department: req.body.department,
        description: req.body.description,
    })
    publication.save(function(err){
        if(err) {
            console.log = false;
            response.exito = false;
            response.msg = "Error al guardar la publicación";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "La publicación se guardó correctamente";
        res.json(response);
    })
}

exports.find = function(req, res) {
    Publication.find(function(err, publications) {
        res.json(publications)
    })
}

exports.findOne = function(req, res) {
    Publication.findOne({_id: req.params.id}, function(err, publication) {
        res.json(publication)
    })
}

exports.update = function(req, res) {
    let publication = {
        material: req.body.material,
        //prodImage: {},
        quantity: req.body.quantity,
        frecuency: req.body.frecuency,
        address: req.body.address,
        city: req.body.city,
        department: req.body.department,
        description: req.body.description,
    }
    Publication.findByIdAndUpdate(
        req.params.id,
        {$set: publication},
        function(err) {
            if(err) {
                console.error(err),
                response.exito = false,
                response.msg = "Error modificando datos en publicación",
                res.json(response);
                return;
            }
            response.exito = true;
            response.msg = "La publicación se ha actualizado";
            res.json(response);
        }
    )
}

exports.remove = function(req, res) {
    Publication.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar la publicación";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "La publicación se ha eliminado";
        res.json(response);
    })
}
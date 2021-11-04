const Publication = require("../models/publication.model")
let response = {
    msg: "",
    exito: false,
}

exports.create = function(req, res) {
    let publication = new Publication({
        material: req.body.material,
        prodImage: null,
        quantity: req.body.quantity,
        frecuency: req.body.frecuency,
        address: req.body.address,
        city: req.body.city,
        department: req.body.department,
        description: req.body.description,
    })
    publication.prodImage.data = req.files;
    publication.prodImage.contentType = 'image/png';
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


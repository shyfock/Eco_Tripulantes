const Profile = require("../models/profile.model")


let response = {
    msg: "",
    exito: false,
}

exports.create = function(req, res) {
    let profile = new Profile({
        name: req.body.name,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        city: req.body.city,
        dept: req.body.dept,
        profession: req.body.profession,
        info: req.body.info,
        users: req.body.users,
        avatar: req.body.avatar,
    })
    profile.save(function(err) {
        if(err) {
            console.log = false;
            response.exito = false;
            response.msg ="Error al crear el perfil de usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "Se ha creado el perfil de usuario";
        res.json(response);
    })
}

exports.find = function(req, res) {
    Profile.find(function(err, profiles) {
        res.json(profiles)
    })
    .populate({ path: 'users', model: 'user'})
    .populate({ path: 'avatar', model: 'upload'})
    .exec();
}

exports.findOne = function(req, res) {
    Profile.findOne({_id: req.params.id}, function(err, profile) {
        res.json(profile)
    })
}

exports.update = function(req, res) {
    let profile = {
        name: req.body.name,
        lastname: req.body.lastname,
        phonenumber: req.body.phonenumber,
        address: req.body.address,
        city: req.body.city,
        dept: req.body.dept,
        profession: req.body.profession,
        info: req.body.info,
    }
    Profile.findByIdAndUpdate(
        req.params.id,
        {$set: profile},
        function(err) {
            if(err) {
                console.error(err),
                response.exito = false,
                response.msg = "Error modificando datos en perfil",
                res.json(response);
                return;
            }
            response.exito = true;
            response.msg = "El perfil se ha actualizado";
            res.json(response);
        }
    )
}
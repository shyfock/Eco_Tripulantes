const User = require("../models/usuario.model")
const crypto = require("crypto")
const jwt = require("jsonwebtoken")
let response = {
    msg: "",
    exito: false,
}

exports.login = function(req, res, next) {
    let hashedpass = crypto.createHash("sha512").update(req.body.password).digest("hex");
    User.findOne({
        username: req.body.username,
        password: hashedpass
    },
    function(err, user) {
        let response = {
            token: null,
        }
        if(user !== null) {
            response.token = jwt.sign({
                id: user._id,
                user: user.user
            }, "__secret__");
        }
        res.json(response);
    });
}

exports.register = function(req, res) {
    let hashedpass = crypto.createHash("sha512").update(req.body.password).digest("hex");
    let user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedpass,
    })
    user.save(function(err) {
        if(err) {
            console.log = false;
            response.exito = false;
            response.msg = "Error al crear el usuario";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El usuario de creó correctamente";
        res.json(response);
    })
}
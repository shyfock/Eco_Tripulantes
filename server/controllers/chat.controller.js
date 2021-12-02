const Chat = require("../models/chat.model");

let response = {
    msg: "",
    exito: false,
}

exports.create = function(req, res) {
    let chat = new Chat({
        sender: req.body.sender,
        receiver: req.body.receiver,
        msg: req.body.msg,
        date: req.body.date,
    })
    chat.save(function(err) {
        if(err) {
            console.log = false;
            response.exito = false;
            response.msg = "Error al enviar el mensaje";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El mensaje ha sido enviado";
        res.json(response);
    })
}

exports.find = function(req, res) {
    Chat.find(function(err, chats) {
        res.json(chats)
    })
    .populate({path: 'sender', model: 'user'})
    .populate({path: 'receiver', model: 'user'})
    .exec();
}

exports.findOne = function(req, res) {
    Chat.findOne({_id: req.params.id}, function(err, chat) {
        res.json(chat)
    })
}

exports.remove = function(req, res) {
    Chat.findByIdAndRemove(req.params.id, function(err) {
        if(err) {
            console.error(err);
            response.exito = false;
            response.msg = "Error al eliminar el chat";
            res.json(response);
            return;
        }
        response.exito = true;
        response.msg = "El chat se ha eliminado";
        res.json(response);
    })
}

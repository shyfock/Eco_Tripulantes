const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usuario.controller")

router.post('/register', usersController.register);
router.post('/login', usersController.login);


module.exports = router;
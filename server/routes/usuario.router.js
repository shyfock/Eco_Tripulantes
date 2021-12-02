const express = require("express")
const router = express.Router()
const usersController = require("../controllers/usuario.controller")

router.post('/register', usersController.register);
router.post('/login', usersController.login);
router.get('/', usersController.find);
router.get('/:username', usersController.findOne);


module.exports = router;
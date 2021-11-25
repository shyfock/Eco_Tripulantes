const express = require("express")
const router = express.Router()
const informationController = require('../controllers/information.controller')

router.get('/', informationController.getNews)

module.exports = router;
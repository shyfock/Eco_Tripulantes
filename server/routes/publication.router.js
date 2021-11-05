const express = require("express")
const router = express.Router()
const publicationsController = require("../controllers/publication.controller")


router.post("/upload", publicationsController.create);

module.exports = router;

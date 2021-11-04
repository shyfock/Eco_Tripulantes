const express = require("express")
const router = express.Router()
const publicationsController = require("../controllers/publication.controller")
const multer = require("multer")
const upload = multer({ dest: "../public/data/uploads/" })


router.post('/upload', upload.array('images', 10), publicationsController.create)
/*
    $ npm install --save multer
    'images' debe esta asignado en name en el formulario HTML 
    10 es el número de imágenes máximo que puede cargarse
    ver: https://www.npmjs.com/package/multer
*/
module.exports = router;

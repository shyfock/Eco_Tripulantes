const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profile.controller");


router.post('/save', profileController.create);
router.get('/', profileController.find);
router.get('/:id', profileController.findOne);
router.put('/:id', profileController.update);

module.exports = router;
const express = require("express")
const router = express.Router()
const publicationsController = require("../controllers/publication.controller")


router.post("/upload", publicationsController.create);
router.get("/", publicationsController.find);
router.get("/:id", publicationsController.findOne);
router.put("/:id", publicationsController.update);
router.delete("/:id", publicationsController.remove);

module.exports = router;

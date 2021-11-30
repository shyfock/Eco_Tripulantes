const express = require("express");
const router = express.Router();
const chatsController = require("../controllers/chat.controller");


router.post("/send", chatsController.create);
router.get("/", chatsController.find);
router.get("/:id", chatsController.findOne);
router.delete("/:id", chatsController.remove);

module.exports = router;
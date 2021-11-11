import { Router } from "express"
var router = Router()
router.get("/", function(req, res,next) {
    res.send("SERVER is working properly")
})

export default router
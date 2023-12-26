const express = require("express")
const { addProduct, getAllProducts } = require("./controller")
const router = express.Router()

router.post("/add",addProduct)
router.get("/get",getAllProducts)


module.exports = router
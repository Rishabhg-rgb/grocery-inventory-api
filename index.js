const express = require('express');
const env = require("dotenv").config()
const cors = require("cors")
const connectToMongo = require("./db")
connectToMongo()
const app = express()
app.use(express.json())
app.use(cors())
const port = process.env.PORT

app.use("/api/products",require("./products/productRoutes"))

app.listen(port,()=>{
    console.log("server statred at port ",port)
})
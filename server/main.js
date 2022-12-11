const express = require("express");
const cors = require("cors")
const orderRouter = require("./ROUTERS/orderRouter")
const userRouter = require('./ROUTERS/userRoute')
const storeRouter = require('./ROUTERS/srotRouter')
const productRouter = require('./ROUTERS/productRouter')
// const mongoose = require("mongoose");

require("./config")
const app = express()

app.use(cors())
app.use(express.json())

app.use('/' , userRouter)
app.use('/', orderRouter)
app.use('/', storeRouter)
app.use('/', productRouter)

app.listen(8000, ()=>console.log("app listen"))


const express = require("express");
const cors = require("cors")
<<<<<<< mazal
const orderRouter = require("./ROUTERS/orderRouter")
=======
const userRouter = require('./ROUTERS/userRoute')
// const mongoose = require("mongoose");
>>>>>>> main

require("./config")
const app = express()

app.use(cors())
app.use(express.json())
app.use('/users' , userRouter)
app.listen(8000, ()=>console.log("app listen"))

<<<<<<< mazal
app.use('/', orderRouter)

app.listen(8000, ()=>console.log("app listen"))
=======
>>>>>>> main

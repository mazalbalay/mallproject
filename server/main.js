const express = require("express");
const cors = require("cors")
const userRouter = require('./ROUTERS/userRoute')

require("./config")
const app = express()

app.use(cors())
app.use(express.json())
app.use('/' , userRouter)
app.listen(8000, ()=>console.log("app listen"))


const express = require("express");
const cors = require("cors")


require("./config")
const app = express()

app.use(cors())
app.use(express.json())

app.listen(8000, ()=>console.log("app listen"))
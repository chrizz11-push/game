require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose") 
const port = process.env.PORT || 2000
const local = "mongodb://localhost/Game"
const app = express()
const cors = require("cors")

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.mongod, {
    useNewUrlParser:true,
})
.then(() => {
    console.log("server is connected to mongoose")
})
.catch((err) => {
    console.log(err.message)
})
app.get("/", (req,res) => {
    res.send("server is connected to mongodb")
})
app.listen(port, () => {
    console.log(`server is listening to:${port}`)
})
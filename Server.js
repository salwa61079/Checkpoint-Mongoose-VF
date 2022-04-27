const express = require('express')
const app = express()

const routePerson =require("./routes/PersonRoute")

app.use(express.json());

require("dotenv").config()
const port = process.env.PORT

const connectDB = require("./config/connectDB")
connectDB()

app.use("/api/person", routePerson);



app.listen(port, (err)=>{
    err 
       ? console.log(err)
       :console.log('the server is running on port : '+ port)
})
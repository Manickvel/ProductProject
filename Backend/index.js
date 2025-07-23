import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './routes/DetailRoute.js'

const app = express()
app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb+srv://manickvel:manick@productdetaiils.5jspqdd.mongodb.net/?retryWrites=true&w=majority&appName=ProductDetaiils").then(()=>{
    console.log("Database connected Succesfully")
})
.catch((error)=>console.log(error));

app.listen(4000,()=>{
    console.log("the application is running on port 4000")
})

app.use('/sms',route)
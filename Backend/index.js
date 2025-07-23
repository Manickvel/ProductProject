import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import route from './routes/DetailRoute.js'
const corsOption ={
    origin:process.env.APPICATION_URL,
    methods:'GET,POST,PUT,DELETE'
};
const app = express()
app.use(bodyParser.json())
app.use(cors(corsOption))


const connectDb = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("Db connected Successfully")
    }catch(error){
        console.log(error)
    }
}
connectDb()
// mongoose.connect().then(()=>{
//     console.log("Database connected Succesfully")
// })
// .catch((error)=>console.log(error));

app.listen(4000,()=>{
    console.log("the application is running on port 4000")
})

app.use('/',route)
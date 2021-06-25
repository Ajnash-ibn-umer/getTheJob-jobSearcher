//import modules
import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
//import local module
import {PORT} from './config/constants.js'
import db from './database/config.js'
import userRoute from './routes/user.js'
// variable declaration


//set config
     
   


const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(cors())

 //set routes

 app.use('/',userRoute)

 //+++++

app.listen(PORT,(err,done)=>{
    if(err){
        console.log('error in server connection'+err.message);
    }else{
        console.log(`server connected port ${PORT}`);
    }
})


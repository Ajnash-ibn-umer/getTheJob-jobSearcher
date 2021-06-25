//import modules
import mongoose from 'mongoose'


//import local modules
import {URL} from '../config/constants.js'
// declare variable




export default mongoose.connect(URL, { useUnifiedTopology: true,useNewUrlParser: true },(err)=>{
    if(err){
        console.log('database connection error'+err.message);
    }else{
        console.log('database connected ');
    }
})
//import modules
import express from 'express'

//import local modules


//declare variables


////

const route=express.Router()

route.get('/',(req,res)=>{
    res.json({name:'ajnash'})
   
})

export default  route

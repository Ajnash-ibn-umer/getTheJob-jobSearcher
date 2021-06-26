//import modules
import express from 'express'

//import local modules
import control from '../controls/userControls.js'

//declare variables


////

const route=express.Router()

route.get('/signup',(req,res)=>{
   const body=req.body;
   
    control.signup(body).then((response)=>{
       
        res.status(201).send(response)
    }).catch(err=>{
        res.status(400).send(err)
    })
   
})

export default  route

import Mongoose from "mongoose";

const Schema=Mongoose.Schema

const user=new Schema({
    name:String,
    email:String,
    password:String
})
export const userSchema=Mongoose.model('users',user)
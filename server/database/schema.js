import Mongoose from "mongoose";

const Schema=Mongoose.Schema

const user=new Schema({
    name:String,
    email:String,
    password:String
})
const post=new Schema({
    title:String,
    date:String, 
    description:String,
    salary:Number
})
export const userSchema=Mongoose.model('users',user)
export const postSchema=Mongoose.model('posts',post)
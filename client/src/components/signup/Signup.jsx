import axios from "axios";
import React, { useState,useContext } from "react";
import "./Signup.css";
import {ApiContext} from '../../store/context'

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfrim_password] = useState("");

const api =useContext(ApiContext)

  return (
    <div className="mainArea">
      <div className="formArea">
        <h1>Signup</h1>
        <form
          onSubmit={async(e) => {
            e.preventDefault();
            //console.log({name,email,password})
           api.post('/signup',{
             name,
             email,
             password,
             confirm_password
           }).then(res=>{
             console.log(res)
           }).catch(error=>{
            console.log(error.response.data);
      console.log(error.response.status);
           })
          }}
        >
          <label htmlFor="name">Enter Your Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="email"
            name=""
            id=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="password">Enter Your Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="confirm_password">Confirm Your Password</label>
          <input
            type="password"
            name="confirm_password"
            value={confirm_password}
            onChange={(e) => {
              setConfrim_password(e.target.value);
            }}
          />
          <button className="btn" >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

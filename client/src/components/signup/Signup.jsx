import React from "react";
import './Signup.css'
function Signup() {
  return (
    <div className="mainArea">
     
      <div className="formArea">
      <h1>Signup</h1>
        <form>
        
          <label htmlFor="name">Enter Your Name</label>
          <input type="text" name="name" />
          <label htmlFor="email">Enter Your Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="password">Enter Your Password</label>
          <input type="password" />
          <button className="btn">Signup</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;

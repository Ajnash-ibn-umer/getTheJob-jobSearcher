import React, { useEffect, useState,useContext } from "react";
import "./AppBar.css";
import { useHistory, useLocation } from "react-router-dom";
import {  AuthContext } from "../../store/context";

function AppBar() {
  const {user} =useContext(AuthContext)
  const history = useHistory();
  let isloginPage = false;
  const location = useLocation();
  if (location.pathname == "/login") {
    isloginPage = true;
  } else {
    isloginPage = false;
  }
  return (
    <div className="appbar">
      <h2 className="logo">GetTheJob</h2>
      {user ? (
        <div className="profile-area">
          <p className="user-name">{user.data.name}</p>
          <img
            className="user-image"
            src="https://avatars.githubusercontent.com/u/62911231?s=400&u=20973a6c2148892db9bb0993ae930369fa856f07&v=4"
            alt="profile-img"
          />
        </div>
      ) : isloginPage ? (
        <button className="btn" onClick={() => history.push("/signup")}>
          Signup
        </button>
      ) : (
        <button className="btn" onClick={() => history.push("/login")}>
          Login
        </button>
      )}
    </div>
  );
}

export default AppBar;

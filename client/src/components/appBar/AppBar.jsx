import React, { useEffect, useState } from "react";
import "./AppBar.css";
import { useHistory, useLocation } from "react-router-dom";
function AppBar() {
  let user = false;
  const history = useHistory();
//   const location = useLocation();
 
//   const [loc,setLoc]=useState('')
//   let isLogin = false;
// //   useEffect(() => {
// //       setLoc(location.pathname)
// //     console.log(loc);
// //     if (loc === "/login") {
// //       isLogin = true;
// //     }else{
// //         isLogin=false
// //     }
// //     console.log(isLogin)
// //   });
  return (
    <div className="appbar">
      <h2 className="logo">GetTheJob</h2>
      {user ? (
        <div className="profile-area">
          <p className="user-name">Ajnash</p>
          <img
            className="user-image"
            src="https://avatars.githubusercontent.com/u/62911231?s=400&u=20973a6c2148892db9bb0993ae930369fa856f07&v=4"
            alt="profile-img"
          />
        </div>
      ) : <button className="btn" onClick={() => history.push("/login")}>Login
        </button>}
      
    </div>
  );
}

export default AppBar;

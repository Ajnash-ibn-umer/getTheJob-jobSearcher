import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ApiContext, AuthContext } from "../../store/context";
import 'bootstrap/dist/css/bootstrap.min.css'
import  {Button} from 'react-bootstrap'
import "./Login.css";
function Login () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const api = useContext(ApiContext);
  const { setUser, user } = useContext(AuthContext);

  return (
    <div className="mainArea">
      <div className="formArea">
        <h1>Login</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            //console.log({name,email,password})
            api
              .post("/login", {
                email,
                password,
              })
              .then(async(res) => {
                //  console.log(res);
               // console.log(res.data.token);
               console.log(res.data.userData);
              await  setUser({ data: res.data.userData, token: res.data.token });
              console.log('user',user.token)
              await localStorage.setItem('token',res.data.token)
                history.push("/");
              })
              .catch((error) => {
                console.log(error.response.data);

                console.log(error.response.status);
              });
          }}
        >
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

          <button className="btn">Login</button>
          <p onClick={() => history.push("/signup")}>Create an Acoount</p>
        </form>
      </div>
    </div>
  );
}

export default Login;

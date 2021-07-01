import "./App.css";
import Home from "./pages/Home.jsx";
import Login from "./pages/LoginPage.jsx";
import Signup from "./pages/SignupPage.jsx";
import {useEffect,useContext} from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import api  from './config/ApiConfig'
import {AuthContext}  from './store/context'
function App() {
  const  {setUser} =useContext(AuthContext)
 useEffect(() => {
 
  api.get('/auth').then(res=>{
    if(res.data){
      console.log("res",res)
      setUser(res)
    }else{
      setUser('')
    }

})
 },[])
  return (
    <div className="App">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
      </Router>
    </div>
  );
}

export default App;

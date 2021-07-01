import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserContext, { ApiContext } from "./store/context";

import api from "./config/ApiConfig";

ReactDOM.render(
  <React.StrictMode>
    <ApiContext.Provider value={api}>
     <UserContext>
        <App />
        </UserContext>
    </ApiContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

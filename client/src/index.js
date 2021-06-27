import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApiContext } from "./store/context";

import api from "./config/ApiConfig";


ReactDOM.render(
  <ApiContext.Provider value={api}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApiContext.Provider>,
  document.getElementById("root")
);

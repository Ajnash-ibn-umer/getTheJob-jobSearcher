import { api } from "./constant";
import axios from "axios";
import { useContext } from "react";
import { ApiContext, AuthContext } from "../store/context";

import React from "react";



export default axios.create({
  baseURL: api,

  headers: {
    "Content-Type": "application/json",
    token:localStorage.getItem('token'),
  },
});

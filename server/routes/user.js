//import modules
import express from "express";
import jwt from "jsonwebtoken";

//import local modules
import control from "../controls/userControls.js";
import { secretKey } from "../config/constants.js";

//declare variables

////

///////////////////////////////////////////////

const router = express.Router();



//signup route **************************


router.post("/signup", (req, res) => {
  const body = req.body;

  control
    .signup(body)
    .then((response) => {
      res.status(201).json(response);
    })
    .catch((err) => {
      res.status(400).send(err);
     
    });
});
///login route ******************************


router.post("/login", (req, res) => {
  control
    .login(req.body)
    .then((response) => {
      res.header("token", response.token).status(200).json(response);
    })
    .catch((err) => {
      res.status(401).send(err);
    });
});



/// home rote***************************

router.get("/auth", (req, res) => {
  const token = req.headers.token;
  console.log("tk", token);
  jwt.verify(token, secretKey, (err, value) => {
    if (err) {
      console.log(err.message);
      res.status(401).send(err.message);
    } else {
      console.log(value.data);
      res.status(201).send(value.data)
      
    }
  });

});



export default router;

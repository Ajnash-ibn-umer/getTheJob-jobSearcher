import joi from "joi";
import { userSchema } from "../database/schema.js";
import bcrypt from "bcrypt";
import { secretKey } from "../config/constants.js";
import jwt from "jsonwebtoken";
export default {
  //*********signup********* */
  signup: (userData) => {
    return new Promise(async (resolve, reject) => {
      const isUser = await userSchema.findOne({ email: userData.email });

      // schema validation

      const schema = joi.object({
        name: joi.string().required().min(3).max(10),
        email: joi.string().required().email(),
        password: joi.string().required().min(4).max(12),
        confirm_password: joi.ref("password"),
      });
      try {
        const result = await schema.validateAsync(userData);
      } catch (error) {
        console.log("err schema" + error.message);
        reject(error.message);
      }
      // password encryption

      await bcrypt.hash(userData.password, 10, (err, value) => {
        if (err) {
          console.log(err.message);
          reject(err.message);
        } else {
          // user existance check

          if (isUser) {
            reject("user is already exist");
          } else {
            // add user to database

            userSchema
              .create({
                name: userData.name,
                email: userData.email,
                password: value,
              })
              .then((res) => {
                console.log("userdata uploaded" + res);
                resolve(res);
              })
              .catch((err) => {
                console.log(err.message);
                reject(err.message);
              });
          }
        }
      });
    });
  },

  //*********//signup********* */

  //*********login************ */

  login: (userData) => {
    return new Promise(async (resolve, reject) => {
      console.log(userData);
      const user = await userSchema.findOne({ email: userData.email });

      if (!user) {
        reject("user is not found");
      } else {
        bcrypt.compare(userData.password, user.password, (err, value) => {
          if (err) {
            console.log("password incorrect", err.message);
            reject(err.message);
          } else {
            if (value) {
              jwt.sign(
                { data: user._id },
                secretKey,
                { expiresIn: "1d" },
                (err, decoded) => {
                  if (err) {
                    console.log(err.message);
                  } else {
                    const token = decoded;
                    console.log("token", token);
                    resolve({ message: "password is correct", userData: user,token });
                  }
                }
              );
            } else {
              console.log(value);
              reject("password is incorrect");
            }
          }
        });
      }
    });
  },

};

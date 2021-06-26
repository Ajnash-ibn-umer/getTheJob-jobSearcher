import joi from "joi";
import { userSchema } from "../database/schema.js";
import bcrypt from "bcrypt";
export default {
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
                reject(err.message)
              });
          }
        }
      });
    });
  },
};

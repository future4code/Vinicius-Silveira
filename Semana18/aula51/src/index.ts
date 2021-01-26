import express from "express"
import cors from "cors"
import {AddressInfo} from "net"
import { signup } from "./endpoints/signup"
import { login } from "./endpoints/login"
import { selectUserById } from "./endpoints/selectUserById"
import { removeUserById } from "./endpoints/removeUserById"
import { selectUserByIdNoPermission } from "./endpoints/selectUserByIdNoPermission"

const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup",signup)
app.post("/login",login)
app.get("/user",selectUserByIdNoPermission)
app.get("/user/profile",selectUserById)
app.delete("/user/:id",removeUserById)

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });
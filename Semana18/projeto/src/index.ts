import express from "express"
import cors from "cors"
import {AddressInfo} from "net"
import { signUp } from "./endpoints/signUp"
import { login } from "./endpoints/login"

const app = express()
app.use(express.json())
app.use(cors())

app.post("/signup",signUp)
app.post("/login",login)

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.log('Failure upon starting ever')
    }
})
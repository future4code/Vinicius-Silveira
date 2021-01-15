import express,{Request,Response} from "express"
import cors from 'cors'
import {connectToServer} from './serverConnection'
import {createTable,createUser,getAllUsers} from './dbData'

let errorCode = 400

const app = express()
app.use(express())
app.use(cors())


app.get("/user/all", async(req:Request,res:Response)=>{
    try{
        const users = await getAllUsers()
        res.status(200).send({Users:users})
    }
    catch(error){
        res.status(errorCode).send({message:error.messsage})
    }
        
})
app.post("/user", async(req:Request, res:Response)=>{
    try{
        const id: string = String(Date.now())
        const name: string = req.body.name
        const nickname: string = req.body.nickname
        const email: string = req.body.email


        if(!name || !nickname || !email){
            errorCode = 422
            throw new Error('Preencha todos os campos corretamente !')
        }

        await createUser(id,name,nickname,email)
        res.status(200).send({message:'Usuário criado com sucesso !'})
    }
    catch(error){   
        res.status(errorCode).send(error.message)
    }
})
connectToServer()
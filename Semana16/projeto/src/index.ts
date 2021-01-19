import express,{Request,Response} from "express"
import cors from "cors"
import {createTableUser,createTableTask,createUser,createTask,searchUser,searchTask} from "./dbData"
import {createTableUserTaskRelation,updateUser,getAllUsers,searchTaskByUserId,searchUserByNickEmail} from "./dbData"
import {createResponsibleUserTask,editStatus} from "./dbData"

let errorCode=400

import {AddressInfo} from "net"
import { connection } from "./dbConnection"

const app= express();

app.use(express.json())
app.use(cors())

//Endpoints

// 8 - Buscar usuário por nickname ou email
app.get("/user", async(req:Request,res:Response)=>{
    try{
        const data: string = req.query.data as string        
        if(!data){
            errorCode = 422
            throw new Error("Informe o dado a ser consultado /user?data=string")
        }
        const result = await searchUserByNickEmail(data)        
        res.status(200).send({message:result})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
//1-Criar Usuário
app.put("/user/create",async (req:Request,res:Response)=>{
    try{
        const id: string = String(Date.now())
        const name: string = req.body.name
        const nickname: string = req.body.nickname
        const email: string = req.body.email

        await createUser (id,name,nickname,email)        
        if(!name || !nickname || !email){
            errorCode = 402
            throw new Error('Informe os dados corretamente')
        }
        res.status(200).send({message:'Usuário cadastrado com sucesso'})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

// 6 - Buscar todos usuários
app.get("/user/all", async(req:Request,res:Response)=>{
    try{
        const users = await getAllUsers()
        res.status(200).send({Users:users})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})



//2-Buscar usuário pelo id
app.get("/user/:id", async(req:Request,res:Response)=>{
    try{
        const id: string = req.params.id
        const result = await searchUser(id)
        
        if(!id){
            errorCode = 422
            throw new Error('Informe o id do usuário')
        }
        if(result.length===0){
            errorCode = 404
            throw new Error('Usuário não encontrado')
        }
        res.status(200).send(result)
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})


//3 - Atualizar usuario pelo id
app.post("/user/edit/:id", async(req:Request,res:Response)=>{
    try{
        const id: string = req.params.id
        const name: string = req.body.name
        const nickname: string = req.body.nickname
        
        
        if(!id || !name || !nickname){
            errorCode = 422
            throw new Error('Informe todos os dados para atualizar o usuário')
        }
        await updateUser(id,name,nickname)
        
        res.status(200).send({message:'Usuário atualizado com sucesso'})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

//4 - Criar Tarefa
app.put("/task", async(req:Request,res:Response)=>{
    try{
        const id: string = String(Date.now())
        const title: string = req.body.title
        const description: string = req.body.description        
        const[dia,mes,ano] = req.body.limitDate.split("/")
        const limitDate: Date = new Date(`${ano}-${mes}-${dia}`)
        const userId: string = req.body.userId

        if(!title || !description || !limitDate || !userId){
            errorCode = 422
            throw new Error('Informe os dados corretamente !')
        }

        await createTask(id,title,description,limitDate,userId)
        res.status(200).send({message:'Tarefa criada com sucesso !'})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

// 7 - Buscar tarefa pelo id do usuário
app.get("/task", async(req:Request,res:Response)=>{
    try{
        const id: string = req.query.id as string
        const status: string = req.query.status as string     
        const result = await searchTaskByUserId(id)
        console.log(id)
        if(!id){
            errorCode = 422
            throw new Error('Informe o Id da tarefa')
        }
                
        if(result.length===0){
            errorCode = 404
            throw new Error('Usuário sem tarefas ')
        }
        res.status(200).send(result)        
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})


// 5 - Buscar tarefa pelo id
app.get("/task/:id", async(req:Request,res:Response)=>{
    try{
        const id: string = req.params.id
        const result = await searchTask(id)

        if(result.length===0){
            errorCode = 404
            throw new Error('Tarefa não encontrada')
        }
        res.status(200).send(result)        
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

app.post("/task/responsible", async(req:Request,res:Response)=>{
    try{
        const userId: string = req.body.userId
        const taskId: string = req.body.taskId
        if(!userId || !taskId){
            errorCode = 422
            throw new Error('Por favor informe userId e taskId no body da requisição')
        }
        
        await createResponsibleUserTask(taskId,userId)
        res.status(200).send({message:"Relação entre usuário e tarefa criado com sucesso"})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})

app.post("/task/status/edit", async(req:Request,res:Response)=>{
    try{
        const id: string = req.body.id
        const status: string = req.body.status

        if(!id || !status){
            errorCode = 422
            throw new Error('Informe id e status da tarefa a atualizar')
        }
        await editStatus(id,status)
        res.status(200).send({message:'Status atualizado com sucesso'})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})
const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else{
        console.error(`Failure upon starting server.`)
    }
})
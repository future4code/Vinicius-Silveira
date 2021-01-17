import express,{Request,Response} from "express"
import cors from "cors"
import knex from "knex"
import Knex from "knex"
import dotenv from "dotenv"

dotenv.config()
let errorCode=400

import {AddressInfo} from "net"

const app= express();

app.use(express.json())
app.use(cors())

const connection : Knex = knex({
    client:"mysql",
    connection:{
        host: process.env.DB_HOST,
        port:3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    }
})

//Funções de CRUD 
//Criar Tabela User
const createTableUser = async ():Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `);
    if(result){
        console.log('Tabela criada com sucesso')
    }
}

//Criar Tabela Tarefas
const createTableTask = async ():Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE ListTask (
            id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255) NOT NULL, 
            description TEXT NOT NULL, 
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            user_id varchar(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(id)
        )
    `);
    if(result){
        console.log('Tabela criada com sucesso')
    }
}

//Criar usuário
const createUser = async(id:string,name:string,nickname:string,email:string):Promise<void>=>{
    await connection
    .insert({
        id:id,
        name:name,
        nickname:nickname,
        email:email
    })
    .into("User")
}

// Criar Tarefa
const createTask = async(id:string,title:string,description:string,limit_date:Date,user_id:string):Promise<void>=>{
    await connection
    .insert({
        id:id,
        title:title,
        description:description,        
        limit_date:limit_date,
        user_id:user_id
    })
    .into("ListTask")
}

// Buscar usuário
const searchUser = async(id:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,nickname FROM User Where id=${id}
    `)    
    return result[0]
}

//Buscar tarefa
const searchTask = async(id:string):Promise<any>=>{
    const result = await connection.raw(`
    SELECT 
        ListTask.id,
        ListTask.title,
        ListTask.description,        
        ListTask.limit_date,
        ListTask.status,
        ListTask.user_id,
        User.nickname 
    FROM ListTask
    LEFT JOIN User ON user_id = User.id
    WHERE ListTask.id = ${id}
    `)
    return result[0]
}

// Atualizar usuário
const updateUser = async(id:string,name:string,nickname:string):Promise<any> =>{
    await connection("User")
    .update({
        name:name,
        nickname:nickname
    })
    .where("id",id)
}
//Endpoints

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

// 5 - Buscar tarefa pelo id
app.get("/task/:id", async(req:Request,res:Response)=>{
    try{
        const id: string = req.params.id
        const result = await searchTask(id)
        console.log(id)
        if(!id){
            errorCode = 422
            throw new Error('Informe o Id da tarefa')
        }
                
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
/*app.get("/user/all", async(req:Request,res:Response)=>{
    try{
        //const users = await getAllTables()
        res.status(200).send({Users:users})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
})*/


const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else{
        console.error(`Failure upon starting server.`)
    }
})
import express,{Response,Request} from "express"
import cors from "cors"

import{AddressInfo} from "net"

const app = express()

app.use(express.json())
app.use(cors())

let errorCode: number = 400

type user = {
    id:number,
    name:string,
    email:string,
    type:string,
    age:number
}

enum userType{
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
let users:user[]=[
    {
        id:1,
        name:'Alice',
        email:'alice@rmail.com',
        type:userType.ADMIN,
        age:12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: userType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: userType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: userType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: userType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: userType.ADMIN,
        age: 60
    }
]

//endpoint exercicio 3,

app.get("/users",(req:Request,res:Response)=>{    

    try{
        const name: string=req.query.name as string
        if(!name){
            errorCode=422
            throw new Error('Nome inválido ou campo vazio')
        }
        const myUser = users.filter((user=>
            user.name.toUpperCase()===name.toUpperCase()
        ))
        if(!myUser){
            errorCode=404
            throw new Error('Nome não encontrado')
        }
        res.status(200).send(myUser)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})


//endpoint exercicio 1, pegar todos usuários
// usamos o método get para buscar dados e a entidade usada foi /users/all
app.get("/users/all",(req:Request,res:Response)=>{
    res.status(200).send(users)
})

//endpoint exercicio 2,
//a)usando path parameters
//b)usando enum
app.get("/users/:type",(req:Request,res:Response)=>{    

    try{
        const type: string=req.params.type as string
        if(!type){
            errorCode=422
            throw new Error('Type inválido ou campo vazio')
        }
        const myUser = users.filter((user=>
            user.type.toUpperCase()===type.toUpperCase()
        ))
        if(!myUser){
            errorCode=404
            throw new Error('Type não encontrado')
        }
        res.status(200).send(myUser)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint 4
//a) foi mudado para put, não mudou nada além do método
//b) Não considero apropriado, pois no CRUD usamos o POST para criar e o PUT para editar
app.post("/users",(req:Request,res:Response)=>{

    try{
        const newUser:user={
            id:Date.now(),
            name:req.body.name,
            email:req.body.email,
            type:req.body.type.toUpperCase(),
            age:req.body.age
        }

        if(!req.body.name || !req.body.email || !req.body.type || !req.body.age){
            errorCode=422
            throw new Error('Preencha todos os campos corretamente')
        }
        users.push(newUser)
        res.status(200).send({message:'Usuário criado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint 5

app.put("/users/:id",(req:Request,res:Response)=>{

    try{
        const updateUser:{id:number,name:string}={
            id:Number(req.params.id),
            name:req.body.name
        }

        if(isNaN(Number(updateUser.id))){
            errorCode=422
            throw new Error('Id Inválido')
        }

        const myUserIndex = users.findIndex((user=>
            user.id===Number(updateUser.id)
        ))
        
        if(myUserIndex === -1){
            errorCode=404
            throw new Error('Usuário não encontrado')
        }
        users[myUserIndex].name=updateUser.name
        res.status(200).send({message:'Usuário alterado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//endpoint 6
app.patch("/users/:id",(req:Request,res:Response)=>{

    try{
        const updateUser:{id:number,name:string}={
            id:Number(req.params.id),
            name:req.body.name
        }

        if(isNaN(Number(updateUser.id))){
            errorCode=422
            throw new Error('Id Inválido')
        }

        const myUserIndex = users.findIndex((user=>
            user.id===Number(updateUser.id)
        ))
        
        if(myUserIndex === -1){
            errorCode=404
            throw new Error('Usuário não encontrado')
        }
        users[myUserIndex].name=updateUser.name
        res.status(200).send({message:'Usuário alterado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})
//endpoint 7
//endpoint 6
app.delete("/users/:id",(req:Request,res:Response)=>{

    try{
        const deleteUser:{id:number}={
            id:Number(req.params.id),            
        }

        if(isNaN(Number(deleteUser.id))){
            errorCode=422
            throw new Error('Id Inválido')
        }

        const myUserIndex = users.findIndex((user=>
            user.id===Number(deleteUser.id)
        ))
        
        if(myUserIndex === -1){
            errorCode=404
            throw new Error('Usuário não encontrado')
        }
        users.splice(myUserIndex,1)
        res.status(200).send({message:'Usuário deletado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})


//Configuração do server local
const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in htpp://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server`)
    }
})
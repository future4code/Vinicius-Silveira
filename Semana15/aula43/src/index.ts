import express,{Response,Request} from "express"
import cors from "cors"

import{AddressInfo} from "net"

const app = express()

app.use(express.json())
app.use(cors())

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

//endpoint exercicio 1, pegar todos usuários
// usamos o método get para buscar dados e a entidade usada foi /users/all
app.get("/users/all",(req:Request,res:Response)=>{
    res.status(200).send(users)
})

//endpoint exercicio 2,
//a)usando path parameters
//b)usando enum
app.get("/users/:type",(req:Request,res:Response)=>{
    let errorCode: number=400

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

//endpoint exercicio 3,

app.get("/users/:name",(req:Request,res:Response)=>{
    let errorCode: number=400

    try{
        const name: string=req.params.name as string
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

//Configuração do server local
const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in htpp://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server`)
    }
})
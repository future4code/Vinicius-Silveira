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

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)
    console.log(result[0][0])
    return result[0]
    
  }

getActorById("001")

app.get("/actor/:id", async(req:Request,res:Response)=>{
    try{
        const id : string = req.params.id
        const actors = await getActorById(id)
        if(!actors.length){
            errorCode = 404
            throw new Error('Nenhum ator encontrado')
        }
        res.status(200).send(actors)
    }    
    catch(error){
        console.log(error)
        res.send(error.message)
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
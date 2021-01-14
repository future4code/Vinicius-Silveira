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

const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    console.log(result[0][0])
    return result[0]
    
}
//Criar ator
const createActor = async (id: string,name: string,salary: number,dateOfBirth: string,gender: string
    ): Promise<void> => {
      await connection
        .insert({
          id: id,
          name: name,
          salary: salary,
          birth_date: dateOfBirth,
          gender: gender,
        })
        .into("Actor");
    };
    
//update salário
const updateSalary = async (id:string, salary:number): Promise<any>=>{
    await connection("Actor")
    .update({salary:salary})
    .where("id",id)    
}

//delete ator
const deleteActor = async (id:string):Promise<any>=>{
    await connection("Actor")
    .delete()
    .where("id",id)    
}

const avgSalary = async (gender:string):Promise<any>=>{
    const result = await connection("Actor")
    .avg("salary as average")
    .where({gender})
    console.log(result[0].average)
}


const getQuantityByGender = async (gender:string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(gender) FROM Actor WHERE gender = '${gender}'
    `)
    console.log(result[0][0])
    return result[0]
}

app.get("/actor/:id", async(req:Request,res:Response)=>{
    try{
        const id : string = req.params.id as string
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

app.get("/actor", async(req:Request,res:Response)=>{
    try{
        const gender : string = req.query.gender as string
        const actors = await getQuantityByGender(gender)
        
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

//endpoint criar ator
app.put("/actor", async (req: Request, res: Response) => {
    try {
      await createActor(
        req.body.id,
        req.body.name,
        req.body.salary,
        req.body.dateOfBirth,
        req.body.gender
      )
        
      res.status(200).send();
    } catch (err) {
      res.status(400).send({
        message: err.message,
      });
    }
  });

// endpoint para atualizar o salário
app.post("/actor", async (req:Request, res:Response)=>{
    try{
        const salary: number=req.body.salary
        const id: string = req.body.id
        await updateSalary(id,salary)
        res.status(200).send({message:'Salário alterado com sucesso'})
    }
    catch(error){
        res.status(400).send(error.message)
    }
})
// endpoint para deletar usuário pelo id
app.delete("/actor/:id", async(req:Request,res:Response)=>{
    try{
        const id: string=req.params.id as string
        await deleteActor(id)
        res.status(200).send({message:'Usuário deletado com sucesso'})
    }
    catch(error){
        res.status(400).send(error.message)
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
import { Request,Response } from "express"
import { generateToken } from "../services/authenticator"
import { createUser } from "../data/createUser"
import { generateId } from "../services/idGenerator"
import { user} from "../types/types"
import { generateHash } from "../services/hashManager"

let errorCode: number = 400

export const signup = async (req:Request,res:Response): Promise<void> =>{

    try{
        const {email,password,role} = req.body as user
        const {zipcode,local,number,complement} = req.body

        if(!email || !password || !role){
            throw new Error("Preencha os dados email, password e role")
        }
        if(!zipcode || !local || !number || !complement){
            throw new Error("Preencha os dados do endereço, cep, rua, numero e complemento(opcional)")
        }
        if (!email.includes("@")){
            errorCode=406
            throw new Error("Email inválido, deve conter '@' no email")
        }
        if(password.length<6){
            errorCode=406
            throw new Error("Senha deve ser maior que 6 caracteres")
        }
        if(role !== "Admin" && role !== "Normal"){
            errorCode = 406
            throw new Error ("O role deve ser 'Admin' ou 'Normal' ")
        }

        const id: string = generateId()
        const cypherPassword: string = await generateHash(password)
        
        await createUser(id,email,cypherPassword,role)
        const token: string = generateToken({id,role})

        res.status(200).send({"token":token})

    }
    catch(error){
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}
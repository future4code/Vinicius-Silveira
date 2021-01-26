import { Request,Response } from "express"
import { generateToken } from "../authentication/authenticator"
import { createUser } from "../data/createUser"
import { generateId } from "../middleware/idGenerator"
import { loginInput } from "../types/types"

let errorCode: number = 400

export const signup = async (req:Request,res:Response): Promise<void> =>{

    try{
        const {email,password} = req.body as loginInput
        
        if(!email || !password){
            throw new Error("Passe o email e password pelo body")
        }
        if (!email.includes("@")){
            errorCode=406
            throw new Error("Email inválido, deve conter '@' no email")
        }
        if(password.length<6){
            errorCode=406
            throw new Error("Senha deve ser maior que 6 caracteres")
        }
        const id: string = generateId()
        await createUser(id,email,password)
        const token: string = generateToken(id)

        res.status(200).send({"token":token})

    }
    catch(error){
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}
import { Request, Response} from "express"
import { generateToken } from "../authentication/authenticator"
import { getUserByEmail } from "../data/getUserByEmail"
import { loginInput } from "../types/types"

let errorCode: number = 400

export const login = async(req:Request,res:Response):Promise<void> =>{

    try{
        const input: loginInput={
            email: req.body.email,
            password: req.body.password
        }

        if(!input.email || ! input.password){
            errorCode = 406
            throw new Error("Preencha o email e o password corretamente")
        }
        
        if (!input.email.includes("@")){
            errorCode=406
            throw new Error("Email inválido, deve conter '@' no email")
        }
        if(input.password.length<6){
            errorCode=406
            throw new Error("Senha deve ser maior que 6 caracteres")
        }
        const user = await getUserByEmail(input.email)      

        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        if(user.password !== input.password){
            errorCode = 401
            throw new Error("Senha inválida")
        }
        const token:string = generateToken(user.id)
        res.status(200).send({token:token})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
}

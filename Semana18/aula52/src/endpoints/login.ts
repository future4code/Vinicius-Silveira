import { Request, Response} from "express"
import { generateToken } from "../services/authenticator"
import { getUserByEmail } from "../data/getUserByEmail"
import { loginInput } from "../types/types"
import { compare } from "../services/hashManager"

let errorCode: number = 400

export const login = async(req:Request,res:Response):Promise<void> =>{

    try{
        const{email,password} = req.body as loginInput
        
        if(!email || !password){
            errorCode = 406
            throw new Error("Preencha o email e o password corretamente")
        }
        
        if (!email.includes("@")){
            errorCode=406
            throw new Error("Email inválido, deve conter '@' no email")
        }
        if(password.length<6){
            errorCode=406
            throw new Error("Senha deve ser maior que 6 caracteres")
        }
        const user = await getUserByEmail(email)
        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        const compareResult = await compare(password,user.password)        
        if(!compareResult){
            errorCode = 401
            throw new Error("Senha inválida")
        }
        
        const token = generateToken({id:user.id,role:user.role})
        res.status(200).send({token:token})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
}

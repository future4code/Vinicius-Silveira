import { Request, Response} from "express"
import { getUserById } from "../data/getUserById"
import { getTokenData } from "../services/authenticator"
import { authenticationData } from "../types/types"

let errorCode: number = 400

export const selectUserById = async (req:Request,res:Response):Promise<void> =>{
    try{
        const {authorization} = req.headers        
        const verifyToken: authenticationData = getTokenData(authorization as string)        
        if(verifyToken.role !== "Admin"){
            errorCode = 401
            throw new Error("Você não tem permissão")
        }
        const user = await getUserById(verifyToken.id)

        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }

        res.status(200).send({id:user.id,email:user.email})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
}
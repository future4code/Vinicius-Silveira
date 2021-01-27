import { Request, Response} from "express"
import { getUserById } from "../data/getUserById"
import { getTokenData } from "../middleware/authenticator"
import { authenticationData } from "../types/types"

let errorCode: number = 400

export const selectUserByIdNoPermission = async (req:Request,res:Response):Promise<void> =>{
    try{
        const {authorization} = req.headers
        const {id} = req.query
        const verifyToken: authenticationData = getTokenData(authorization as string)        
        
        const user = await getUserById(id as string)

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
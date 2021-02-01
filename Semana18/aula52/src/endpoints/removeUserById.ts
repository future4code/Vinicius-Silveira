import { Request, Response } from "express"
import { deleteUser } from "../data/deleteUser"
import { getUserById } from "../data/getUserById"
import { getTokenData } from "../services/authenticator"
import { authenticationData } from "../types/types"

let errorCode = 400
export const removeUserById = async(req:Request,res:Response):Promise<void> =>{
    try{
        const { authorization } = req.headers
        const { id } = req.params
        
        const verifyToken: authenticationData = getTokenData(authorization as string)
        if(verifyToken.role !== "Admin"){
            errorCode = 401
            throw new Error("Você não tem permissão")
        }

        const user = await getUserById(id)
        if(!user){
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        await deleteUser(id)
        res.status(200).send({message:"Usuário deletado com sucesso"})
    }
    catch(error){
        res.status(errorCode).send({message:error.message})
    }
}
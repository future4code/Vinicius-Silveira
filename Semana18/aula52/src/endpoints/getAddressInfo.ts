import { Request, Response } from "express"
import { getAddressByCep } from "../services/addressManager"
import { address } from "../types/types"

let errorCode: number = 400

export const getAddressInfo = async(req:Request,res:Response)=>{

    try {
        const { cep } = req.params 

        if(isNaN(Number(cep)) || cep.includes("-")){
            errorCode = 422
            throw new Error("Informe o cep, somente números")
        }

        const address: address = await getAddressByCep(cep)

        res.status(200).send(address)
    } 
    catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}
import { Request,Response } from "express"
import { generateToken } from "../services/authenticator"
import { createUser } from "../data/createUser"
import { generateId } from "../services/idGenerator"
import { address, user} from "../types/types"
import { generateHash } from "../services/hashManager"
import { getAddressByCep } from "../services/addressManager"
import { createAddress } from "../data/createAddress"

let errorCode: number = 400

export const signup = async (req:Request,res:Response): Promise<void> =>{

    try{
        const {email,password,role} = req.body as user
        let {zipcode,local,number,complement,neighborhood} = req.body

        if(!email || !password || !role){
            throw new Error("Preencha os dados email, password e role")
        }
        if(!zipcode || !local || !number){
            throw new Error("Preencha os dados do endereço, cep, rua, numero")
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

        const address: address = await getAddressByCep(zipcode)
        if(address.local!==""){
            local = address.local
        }
        if(address.neighborhood!==""){
            neighborhood = address.neighborhood
        }

        const idUser: string = generateId()
        const cypherPassword: string = await generateHash(password)        
        await createUser(idUser,email,cypherPassword,role)
        const token: string = generateToken({id:idUser,role})

        const idAddresss: string = generateId()
        await createAddress(idAddresss,local,Number(number),complement,zipcode,address.city,address.state,idUser)

        res.status(200).send({"token":token})

    }
    catch(error){
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}
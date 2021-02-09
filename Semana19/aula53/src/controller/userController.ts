import { Request, Response } from "express"
import { businessDeleteUser, businessLogin, businessSelectAllUsers, businessSignup } from "../business/userBusiness"

export const signup = async (req:Request,res:Response):Promise<void> =>{
    try{
        const { name, email, password, role } = req.body

        const token = await businessSignup(
            name,
            email,
            password,
            role
        )
        res.status(201).send({
            message: "Usuário criado com sucesso",
            token
        })
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

export const login = async(req:Request, res:Response):Promise<void> =>{
    try{
        const { email, password } = req.body
        
        const token = await businessLogin(email,password)
        res.status(200).send({
            message:"Usuário logado",
            token
        })
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

export const getAllUsers = async (req:Request, res: Response):Promise<void> =>{
    try{
        const { authorization } = req.headers
        const users = await businessSelectAllUsers(authorization as string)

        res.status(200).send(users)        
    }
    catch(error){
        res.status(400).send(error.message)
    }
}

export const deleteUser = async(req:Request, res:Response): Promise<void> =>{
    try{
        const { authorization } = req.headers
        const { id } = req.params

        await businessDeleteUser(id,authorization as string)

        res.status(200).send({
            message:"Usuário deletado com sucesso !"
        })
    }
    catch(error){
        res.status(400).send(error.message)
    }
}
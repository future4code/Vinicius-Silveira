import { connection } from "./connection"
import { user } from "../business/entities/user"

export const insertUser = async(user:user) =>{
    await connection
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
        .into("User_Arq")
}

export const selectUserByEmail = async(email:string):Promise<user> =>{
    try{
        const result = await connection
            .select("*")
            .from("User_Arq")
            .where({email})
        
        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        }
    }
    catch(error){
        throw new Error(error.message || error.sqlMessage)
    }
}

export const selectUserById = async(id:string):Promise<user> =>{
    try{
        const result = await connection
            .select("*")
            .from("User_Arq")
            .where({id})
        
        return {
            id: result[0].id,
            name: result[0].name,
            email: result[0].email,
            password: result[0].password,
            role: result[0].role
        }
    }
    catch(error){
        throw new Error(error.message || error.sqlMessage)
    }
}

export const selectAllUsers = async():Promise<any> =>{
    try{
        const result = await connection
            .select("*")
            .from("User_Arq")
        
        return result
    }
    catch(error){
        throw new Error(error.sqlMessage || error.message)
    }
}

export const deleteUserById = async(id:string):Promise<void> =>{
    try{
        await connection
            .delete()
            .from("User_Arq")
            .where({id})
    }
    catch(error){
        throw new Error(error.sqlMessage || error.message)
    }
}
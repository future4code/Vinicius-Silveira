import { user } from "../business/entities/user"
import { connection } from "./connection"

export const insertUser = async (
    user:user
) => {
    await connection 
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        .into ('labook_users')
}

export const selectUserByEmail = async (
    email: string
):Promise<user> => {
    try{
        const result = await connection
            .select("*")
            .from("labook_users")
            .where({email})
        
            return {
                id: result[0].id,
                name: result[0].name,
                email: result[0].email,
                password: result[0].password
            }
    }    
    catch(error){
        throw new Error(error.sqlMessage || error.message)
    }
}
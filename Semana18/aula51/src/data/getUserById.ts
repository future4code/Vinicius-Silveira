import { connection } from "../connection/dbConnection"

export const getUserById = async(id:string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("aula50_User")
        .where({id})
    
    return result[0]
}


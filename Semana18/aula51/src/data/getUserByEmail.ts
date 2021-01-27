import { connection } from "../connection/dbConnection"

export const getUserByEmail = async(email:string):Promise<any> =>{
    const result = await connection
        .select("*")
        .from("aula50_User")
        .where({email})
    
    return result[0]
}

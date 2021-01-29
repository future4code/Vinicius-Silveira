import {connection} from "../dbConnection/dbConnection"

export const getUserByEmail = async (email:string):Promise<any>=>{
    const result = await connection
        .select("*")
        .from("cookenu_Users")
        .where({email})

    return result[0]
}
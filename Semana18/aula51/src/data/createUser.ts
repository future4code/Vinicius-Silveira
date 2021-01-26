import { connection } from "../connection/dbConnection"

export const createUser = async(id:string,email:string,password:string,role:string):Promise<void> =>{
    await connection
    .insert({
        id:id,
        email:email,
        password:password,
        role:role
    })
    .into("aula50_User")
}
import { connection } from "../connection/dbConnection"

export const deleteUser = async(id:string):Promise<void> =>{
    await connection
    .delete()
    .from("aula50_User")
    .where({id})
}
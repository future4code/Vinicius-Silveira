import { connection }from "../connection/dbConnection"

export const createAddress = async(id:string,local:string,neighborhood:string,number:number,complement:string,zipcode:string,city:string,state:string,user_id:string):Promise<void> =>{
    await connection
        .insert({
            id,
            local,
            neighborhood,
            number,
            complement,
            zipcode,
            city,
            state,
            user_id
        })
        .into("User_Address")
}
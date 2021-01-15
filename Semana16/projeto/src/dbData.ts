
import {connection} from './dbConnection'

export const createTable = async ():Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `);
}

export const createUser = async(id:string,name:string,nickname:string,email:string):Promise<void> =>{
    await connection
    .insert({
        id:id,
        name:name,
        nickname:nickname,
        email:email
    })
    .into("User")
}

export const getAllUsers = async():Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM User
    `)
    console.log(result[0])
    return result[0]
    
}
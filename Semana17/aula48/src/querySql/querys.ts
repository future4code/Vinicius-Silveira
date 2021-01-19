import {connection} from "../data/dbConnection"

export const selectAllUsers = async():Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,name,email,type
        FROM aula48_exercicio;
    `)
    return result[0]
}

export const selectUserByName = async(name:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,name,email,type 
        FROM aula48_exercicio
        WHERE name LIKE '%${name}%';
    `)
    return result[0]
}

export const selectUserByType = async(type:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE type LIKE '%${type}%';
    `)
    return result[0]
}

export const selectAllUsersLimit = async():Promise<any> =>{
    const result = await connection.raw(`
        SELECT id, name, email, type 
        FROM aula48_exercicio
        LIMIT 5;        
    `)
    return result[0]
}

export const selectUserOrdened = async(orderType:string,order:string): Promise<any>=>{
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderType} ${order};
    `)
    return result[0]
}

export const selectAllUserOrdened = async(orderType:string,order:string,limit:number,page:number): Promise<any>=>{
    const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(orderType,order)
    .limit(limit)
    .offset(page)   
    return result
}
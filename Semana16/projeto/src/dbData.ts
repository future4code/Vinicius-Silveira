import {connection} from './dbConnection'

export const createTableUser = async ():Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE User (
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NULL,
            nickname VARCHAR(255) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL
        )
    `);
    if(result){
        console.log('Tabela criada com sucesso')
    }
}

export const createTableTask = async ():Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE ListTask (
            id VARCHAR(255) PRIMARY KEY, 
            title VARCHAR(255) NOT NULL, 
            description TEXT NOT NULL, 
            status VARCHAR(255) NOT NULL DEFAULT "to_do",
            limit_date DATE NOT NULL,
            user_id varchar(255) NOT NULL,
            FOREIGN KEY (user_id) REFERENCES User(id)
        )
    `);
    if(result){
        console.log('Tabela criada com sucesso')
    }
}

export const createTableUserTaskRelation = async(): Promise<any> =>{
    const result = await connection.raw(`
        CREATE TABLE UserTaskRelation (
            task_id VARCHAR(255),
            user_id VARCHAR(255),
            FOREIGN KEY (task_id) REFERENCES ListTask(id),
            FOREIGN KEY (user_id) REFERENCES User(id)
        );    
    `)
    if(result){
        console.log('Tabela criada com sucesso')
    }
}

export const createUser = async(id:string,name:string,nickname:string,email:string):Promise<void>=>{
    await connection
    .insert({
        id:id,
        name:name,
        nickname:nickname,
        email:email
    })
    .into("User")
}

export const createTask = async(id:string,title:string,description:string,limit_date:Date,user_id:string):Promise<void>=>{
    await connection
    .insert({
        id:id,
        title:title,
        description:description,        
        limit_date:limit_date,
        user_id:user_id
    })
    .into("ListTask")
}

export const searchUser = async(id:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,nickname FROM User Where id=${id}
    `)    
    return result[0]
}

export const searchTask = async(id:string):Promise<any>=>{
    const result = await connection.raw(`
    SELECT 
        ListTask.id,
        ListTask.title,
        ListTask.description,        
        ListTask.limit_date,
        ListTask.status,
        ListTask.user_id,
        User.nickname 
    FROM ListTask
    LEFT JOIN User ON user_id = User.id
    WHERE ListTask.id = ${id}
    `)
    return result[0]
}

export const updateUser = async(id:string,name:string,nickname:string):Promise<any> =>{
    await connection("User")
    .update({
        name:name,
        nickname:nickname
    })
    .where("id",id)
}

export const getAllUsers = async():Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,nickname FROM User
    `);
    return result[0]
}

export const searchTaskByUserId = async(id:string):Promise<any>=>{
    const result = await connection.raw(`
    SELECT 
        ListTask.id,
        ListTask.title,
        ListTask.description,        
        ListTask.limit_date,
        ListTask.status,
        ListTask.user_id,
        User.nickname 
    FROM ListTask
    LEFT JOIN User ON user_id = User.id
    WHERE ListTask.user_id = ${id}
    `)
    return result[0]
}

export const searchUserByNickEmail = async(data:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT id, nickname FROM User WHERE (nickname=${data} || email=${data})
    `)
    return result[0]
}

export const createResponsibleUserTask = async(taskId:string,userId:string):Promise<void>=>{
    await connection.raw(`
        INSERT INTO UserTaskRelation(task_id,user_id)
        VALUES
        (${taskId},${userId})
    `)
}

export const editStatus = async(id:string,status:string): Promise<void> => {
    await connection("ListTask")
        .update({status:status})
        .where("id",id)    
}

export const searchTaskByStatus = async(status:string): Promise<any> =>{
    const result = await connection.raw(`
    SELECT 
        ListTask.id,
        ListTask.title,
        ListTask.description,        
        ListTask.limit_date,
        ListTask.status,
        ListTask.user_id,
        User.nickname 
    FROM ListTask
    LEFT JOIN User ON user_id = User.id
    WHERE ListTask.status = ${status}
    `)
    return result[0]
}
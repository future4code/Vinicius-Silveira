import {Response,Request} from "express"
import {selectAllUsers, selectAllUsersLimit, selectUserByName, selectUserByType, selectUserOrdened,selectAllUserOrdened} from "../querySql/querys"

let errorCode: number = 400

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsers()
 
       if(!users.length){
            errorCode = 404
            throw new Error("Nenhum dado encontrado")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }

 export const getUsersByName = async(req: Request,res: Response,name:string): Promise<void> =>{
   try {      
      const users = await selectUserByName(name)

      if(!users.length){
           errorCode = 404
           throw new Error("Nenhum dado encontrado")
      }

      res.status(200).send(users)
      
   } catch (error) {      
      res.status(errorCode).send(error.message)
   }
}

export const getUserByType = async(req:Request, res:Response, type:string):Promise<void> =>{
   try{       
      const users = await selectUserByType(type)

      if(!users.length){
         errorCode=404
         throw new Error ("Nenhum dado encontrado")
      }
      res.status(200).send(users)
   }
   catch(error){
      res.status(errorCode).send(error.message)
   }
}

export const getUserOrder = async(req:Request,res:Response,orderType:string,order:string):Promise<void>=>{
   try{
      const users = await selectUserOrdened(orderType,order)

      if(!users.length){
         errorCode = 422
         throw new Error("Nenhum dado encontrado")
      }
      res.status(200).send(users)
   }
   catch(error){
      res.status(errorCode).send(error.message)
   }
}

export const getAllUserOrder = async(req:Request,res:Response,orderType:string,order:string,limit:number,page:number):Promise<void>=>{
   try{
      const users = await selectAllUserOrdened(orderType,order,limit,page)

      if(!users.length){
         errorCode = 422
         throw new Error("Nenhum dado encontrado")
      }
      res.status(200).send(users)
   }
   catch(error){
      res.status(errorCode).send(error.message)
   }
}
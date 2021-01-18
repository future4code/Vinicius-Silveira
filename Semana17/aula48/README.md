# Filtros, Ordenação e Paginação

### Exercício 1
a) Filtrar por nome através de parâmetro. Foi utilizado query params.
```SQL
export const selectUserByName = async(name:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT id,name,email,type 
        FROM aula48_exercicio
        WHERE name LIKE '%${name}%'
    `)
    return result[0]
}
```
```typescript
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
```

b) Filtrar por tipo usando path params.
```sql
export const selectUserByType = async(type:string):Promise<any> =>{
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        WHERE type LIKE '%${type}%'
    `)
    return result[0]
}
```
```typescript
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
```

### Exercício 2
Ordenar por nome ou tipo de usuário.
```sql
export const selectUserOrdened = async(orderType:string,order:string): Promise<any>=>{
    const result = await connection.raw(`
        SELECT * FROM aula48_exercicio
        ORDER BY ${orderType} ${order};
    `)
    return result[0]
}
```
```typescript
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
```
```typescript
app.get("/user/order",async(req:Request,res:Response)=>{
    try{
        const orderType: string = req.query.orderType as string
        const order: string = req.query.order as string

        if(orderType !== 'name' && orderType !== 'type'){
            errorCode = 422
            throw new Error("Informe 'name' ou 'type' para o orderType")
        }

        if(order !== 'ASC' && order !== 'DESC'){
            errorCode = 422
            throw new Error("Informe 'ASC' ou 'DESC' para o order")
        }

        getUserOrder(req,res,orderType,order)
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }    
})
```

### Exercício 3

Limitar a exibição para 5 usuários por vez.
```sql
export const selectAllUsersLimit = async():Promise<any> =>{
    const result = await connection.raw(`
        SELECT id, name, email, type 
        FROM aula48_exercicio
        LIMIT 5;        
    `)
    return result[0]
}
```
```typescript
export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
    try {
       const users = await selectAllUsersLimit()
 
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
```
### Exercício 4
Endpoint com todas as funcionalidades filtros, ordenação e paginação.
```sql
export const selectAllUserOrdened = async(orderType:string,order:string,limit:number,page:number): Promise<any>=>{
    const result = await connection("aula48_exercicio")
    .select("*")
    .orderBy(orderType,order)
    .limit(limit)
    .offset(page)   
    return result
}
```
```typescript
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
```
```typescript
app.get("/user/order",async(req:Request,res:Response)=>{
    try{
        const orderType: string = req.query.orderType as string
        const order: string = req.query.order as string
        const limit: number = Number(req.query.limit)
        const page: number = Number(req.query.page)

        const offset: number = limit *(page-1)

        if(!orderType && !order && !limit && !page){ 
            getAllUsers(req,res)
        }else if(!orderType && !order){
                getAllUserOrder(req,res,'name','ASC',limit,offset)
            }else if(!page){
                if(orderType !== 'name' && orderType !== 'type'){
                    errorCode = 422
                    throw new Error("Informe 'name' ou 'type' para o orderType")
                }
        
                if(order !== 'ASC' && order !== 'DESC'){
                    errorCode = 422
                    throw new Error("Informe 'ASC' ou 'DESC' para o order")
                }
                getAllUserOrder(req,res,orderType,order,limit,1)
            }else{
                getAllUserOrder(req,res,orderType,order,limit,offset)
            }
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }    
})
```
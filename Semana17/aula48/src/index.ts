import express,{Response,Request} from "express"
import cors from "cors"
import {AddressInfo} from "net"
import {selectAllUsers} from "./querySql/querys"
import {getAllUserOrder, getAllUsers, getUserByType, getUserOrder, getUsersByName} from "./endpoint/endpoint"

let errorCode: number = 400

const app = express()
app.use(express.json())
app.use(cors())

app.get("/user", async(req:Request, res:Response)=>{
    const name: string = req.query.name as string
    if(!name){
        getAllUsers(req,res)
    }else{
        getUsersByName(req,res,name)
    }
    
})

app.get("/user/all", async(req:Request,res:Response)=>{
   getAllUsers(req,res)
})

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

app.get("/user/:type", async(req:Request,res:Response)=>{
    const type: string = req.params.type    
    getUserByType(req,res,type)
})

const server = app.listen(process.env.PORT || 3003, ()=>{
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    }else{
        console.error(`Failure upon starting server.`)
    }
})
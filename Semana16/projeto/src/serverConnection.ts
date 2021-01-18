import express from "express"
import cors from "cors"
import {AddressInfo} from "net"

const app = express()
    app.use(express())
    app.use(cors())
export const connectToServer =() =>{    
    const server = app.listen(process.env.PORT || 3003, () =>{
        if(server){
            const address = server.address() as AddressInfo
            console.log(`Server is running in http://localhost:${address.port}`)
        }else{
            console.error(`Failure upopn starting server`)
        }
    })
}

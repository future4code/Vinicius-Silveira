import express,{Request,Response} from "express"
import cors from "cors"
import {countries} from "./countries"
import {AddressInfo} from "net"
const app = express()

app.use(express.json())
app.use(cors())
//endpoint 1
app.get('/countries/all', (req:Request,res:Response)=>{
    const allCountries = countries.map(country =>({
        id:country.id,
        name:country.name,        
    }))
    res.status(200).send(allCountries)
})
//endpoint 3
app.get('/countries/search',(req:Request, res:Response)=>{
    const filterCountries = countries.filter(
        country=> country.name.includes(req.query.name as string)
    )
    const filterCapital = countries.filter(
        capital=>capital.capital.includes(req.query.capital as string)
    )
    const filterContinent = countries.filter(
        continent=>continent.continent.includes(req.query.continent as string)
    )
    res.status(200).send(filterContinent)
})

//endpoint 2
app.get('/countries/:id', (req:Request,res:Response)=>{
    const result = countries.find(
        country=>country.id===Number(req.params.id))
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send('Not Found')
    }    
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


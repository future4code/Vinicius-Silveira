import express,{Request,Response} from "express"
import cors from "cors"
import {countries,country} from "./countries"
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
    /*const filterCountries = countries.filter(
        country=> country.name.includes(req.query.name as string)
    )
    const filterCapital = countries.filter(
        capital=>capital.capital.includes(req.query.capital as string)
    )
    const filterContinent = countries.filter(
        continent=>continent.continent.includes(req.query.continent as string)
    )
    res.status(200).send(filterContinent)*/
    let result: country[] = countries
    if(req.query.name || req.query.capital || req.query.continent){
        if (req.query.name) {
            result = result.filter(
                country => country.name.includes(req.query.name as string)
            )
        }
    
        if (req.query.capital) {
            result = result.filter(
                country => country.capital.includes(req.query.capital as string)
            )
        }
    
        if (req.query.continent) {
            result = result.filter(
                country => country.continent.includes(req.query.continent as string)
            )
        }
        res.status(200).send(result)
    }else{
        res.status(404).send('Nenhum parâmetro de busca foi informado !')
    }
    
})

//endpoint 2
app.get('/countries/:id', (req:Request,res:Response)=>{
    const result : country | undefined = countries.find(
        country=>country.id===Number(req.params.id))
    if(result){
        res.status(200).send(result)
    }else{
        res.status(404).send('Not Found')
    }    
})

//endpoint 4
app.put('/countries/edit/:id', (req:Request,res:Response)=>{
    countries[Number(req.params.id)].name=req.body.name
    countries[Number(req.params.id)].capital=req.body.capital
    res.status(200).send(req.body)

})
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});


import axios from "axios"
import { address } from "../types/types"

const URL = "https://viacep.com.br/ws"

export const getAddressByCep = async(cep:string):Promise<address> =>{
    try{
        const result = await axios.get(`${URL}/${cep}/json`)
        console.log("result:",result)
        const myAddress: address = {
            local: result.data.logradouro,
            neighborhood: result.data.bairro,
            city: result.data.localidade,
            state: result.data.uf
        }
        console.log("address:",myAddress)
        return myAddress
    }
    catch(error){
        throw new Error(error.message)
    }
}
import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useHistory,useParams} from 'react-router-dom'
const headers = {
    headers:{
        auth:localStorage.getItem('token')
    }
}
function DetalheViagens (){    
    const pathParams = useParams()
    const[viagem,setViagem] = useState(undefined)

    useProtectedPage()
    
    const getDetalhesViagem = ()=>{
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trip/${pathParams.idViagem}`
        console.log(url)
        axios
            .get(url,headers)
            .then((res)=>{
                setViagem(res.data.trip)        
            })
            .catch(()=>{
                alert('Viagem não encontrada !')
            })
    }
    useEffect(()=>{
        getDetalhesViagem()
    },[])
      
    return(
        <div>            
           {viagem && viagem.map((viagens)=>{
                return(
                    <div key={viagens.id}>
                        <div>
                            <h1>{viagens.name}</h1>
                        </div>
                        <div>
                            <div>
                                <h2>Detalhes da viagem</h2>
                            </div>
                            <div>
                                <p>Planeta: {viagens.planet}</p>
                                <p>Duração: {viagens.durationInDays} dias</p>
                                <p>Data: {viagens.date}</p>
                                <p>Descrição: {viagens.description}</p>
                            </div>
                        </div>                
                    </div>
                )
            })}      
        </div>
    )
}

export default DetalheViagens
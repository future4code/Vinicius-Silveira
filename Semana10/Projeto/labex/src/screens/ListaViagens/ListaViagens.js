import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips'

function ListaViagens (){    
    const [viagem,setViagem]=useState(undefined)
    const history=useHistory()
    
    useProtectedPage()

    const logOut = ()=>{
        localStorage.removeItem('token')        
        history.push('/')
    }
    const getDetalhesViagens = ()=>{
        axios.get(url)              
        .then((res) => {
            setViagem(res.data.trips)
            console.log('Dados:' ,res.data.trips)
        })
        .catch((err) => {
            console.log(err);
        });        
    }
    useEffect (()=>{
        getDetalhesViagens()            
    },[])    
    
    console.log('Viagem: ',viagem)         
    return(
        <div>            
            <div>
                <div>
                    <h2>Destinos</h2>
                </div>                                 
                {viagem && viagem.map((viagens)=>{
                    return(
                        <div key={viagens.id}>
                            <p>Viagem: {viagens.name}</p>
                            <p>Planeta: {viagens.planet}</p>
                            <button>Detalhes</button>
                        </div>
                    )
                })}         
                <button onClick={logOut}>Sair</button>                                         
            </div>
        </div>
    )
}
export default ListaViagens
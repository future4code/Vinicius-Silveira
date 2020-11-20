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
        })
        .catch(() => {
            alert('Viagens não encontradas');
        });        
    }

    const deletaViagem = (id)=>{
        axios
            .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips/${id}`)
            .then(()=>{
                alert('Viagem deletada com sucesso !')
            })
            .catch(()=>{
                alert('Não foi possível deletar a viagem')
            })          
            getDetalhesViagens()  
    }

    const detalheViagem = ()=>{
        history.push(`/Admin/Home/ListaViagens/DetalhesViagem/${localStorage.getItem('token')}`)
    }

    useEffect (()=>{
        getDetalhesViagens()            
    },[viagem])    
              
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
                            <button onClick={detalheViagem}>Detalhes</button>
                            <button onClick={()=>deletaViagem(viagens.id)}>Deletar</button>
                        </div>
                    )
                })}         
                <button onClick={logOut}>Sair</button>                                         
            </div>
        </div>
    )
}
export default ListaViagens
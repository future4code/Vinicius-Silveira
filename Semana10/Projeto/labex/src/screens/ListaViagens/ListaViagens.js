import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import {ContainerViagens,DetalheViagem,DivViagem,TituloDestino,DivBotoes} from './Styled'
import {BotaoHome} from '../../Botoes/Botoes'

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

    const detalheViagem = (id)=>{
        history.push(`/Admin/Home/ListaViagens/DetalhesViagem/${id}`)
    }

    useEffect (()=>{
        getDetalhesViagens()            
    },[viagem])    
              
    return(
        <ContainerViagens>       
            <HeaderAdmin/>     
            <div>
                <div>
                    <TituloDestino>Destinos</TituloDestino>
                </div>   
                <DetalheViagem>                    
                    {viagem && viagem.map((viagens)=>{
                        return(
                            <DivViagem key={viagens.id}>
                                <h3>{viagens.name}</h3>
                                <p>{viagens.description}</p>
                                <DivBotoes>
                                    <BotaoHome onClick={()=>detalheViagem(viagens.id)}>Detalhes</BotaoHome>
                                    <BotaoHome onClick={()=>deletaViagem(viagens.id)}>Deletar</BotaoHome>
                                </DivBotoes>                                
                            </DivViagem>
                        )
                    })}                
                </DetalheViagem>
            </div>
        </ContainerViagens>
    )
}
export default ListaViagens
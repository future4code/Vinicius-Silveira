import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useParams} from 'react-router-dom'

const headers={
    headers:{
        auth:localStorage.getItem('token')
    }
}

function DetalheViagens (){
    const[viagem,setViagem] = useState({})    
    const pathParams = useParams()    
    const[situacaoCandidato,setSituacaoCandidato]=useState(false)
    const[idCandidato,setIdCandidato]=useState('')

    useProtectedPage()

    useEffect(()=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trip/${pathParams.idViagem}`

        axios
            .get(url,headers)
            .then((res)=>{
                setViagem(res.data.trip)                       
            })
            .catch(()=>{
                alert('Viagem não encontrada !')                
            })
    },[viagem])

    const aprovarCandidato = ()=>{
        const url=`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips/${pathParams.idViagem}/candidates/${idCandidato}/decide`
        const body={
            approve:situacaoCandidato
        }        
        axios
            .put(url,body,headers)
            .then(()=>{
                if(situacaoCandidato){
                    alert('Candidato aprovado')
                }else{
                    alert('Candidato rejeitado')
                }                
            })
            .catch(()=>{
                alert('Erro ao aprovar/reprovar candidato')
            })
    }
    useEffect(()=>{
        if(idCandidato!==''){
            aprovarCandidato()
        }
    },[idCandidato])

    const botaoLike = (idCandidato)=>{
        setSituacaoCandidato(true)
        setIdCandidato(idCandidato)
    
    }
    const botaoDislike = (idCandidato)=>{
        setSituacaoCandidato(false)
        setIdCandidato(idCandidato)
    
    }
    return(
        <div>   
            <div>
                <h1>{viagem.name}</h1>
            </div>
            <div>
                <div>
                    <div>
                        <h2>Detalhes da viagem</h2>
                    </div>
                    <div>
                        <p>Planeta: {viagem.planet}</p>
                        <p>Duração: {viagem.durationInDays} dias</p>
                        <p>Data: {viagem.date}</p>
                        <p>Descrição: {viagem.description}</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h2>Astronautas</h2>
                    </div>
                    {viagem.candidates && viagem.candidates.map((candidatos)=>{
                    return(
                        <div key={candidatos.id}>
                            <p>Nome: {candidatos.name}</p>
                            <p>Motivo: {candidatos.applicationText}</p>    
                            <button onClick={()=>botaoLike(candidatos.id)}>Like</button>                        
                            <button onClick={()=>{botaoDislike(candidatos.id)}}>Dislike</button>
                        </div>
                    )
                })} 
                </div>
            </div>
            
        </div>
    )
}

export default DetalheViagens
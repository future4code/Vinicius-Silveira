import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {DivContainer,DivListMatches,DivHeightMatches,DivRefreshMatches} from './Styled'
import {ImgMatches,IconMatchProfile} from './Styled'
import iconRefresh from '../../assets/icon-refresh.png'

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/matches'
const urlPut = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear'
function Matches (){

    const [listMatches,setListMatches] = useState([])

    const getMatches = ()=>{
        axios.get(urlGet)
        .then((res)=>{
            setListMatches(res.data.matches)
        })
        .catch((err)=>{
            alert('Erro: ',err.message)
        })
    }
    const putMatches = ()=>{
        axios.put(urlPut)
        .then(()=>{
            alert('Matches limpos com sucesso !')
        })
        .catch(()=>{
            alert('Erro ao limpar os macthes')
        })
    }
    const onClickRefreshMatches = ()=>{
        putMatches()
    }
    useEffect(()=>{
        getMatches()
    },[])

    const newMatchesList = listMatches.map((match)=>{
        return(
            <DivListMatches key={match.id}>
                <ImgMatches src={match.photo}/>
                <h3>{match.name}</h3>
            </DivListMatches>
        )
    })
    return (
        <DivContainer>         
            <DivHeightMatches>
                {newMatchesList}
            </DivHeightMatches>               
            <DivRefreshMatches>
                <IconMatchProfile src={iconRefresh} onClick={onClickRefreshMatches}/>
            </DivRefreshMatches>  
        </DivContainer>
    )
}

export default Matches

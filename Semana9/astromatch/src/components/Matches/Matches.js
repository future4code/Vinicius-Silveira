import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import iconRefresh from '../../assets/icon-refresh.png'

const DivContainer = styled.div`  
    display:flex;  
    flex-direction:column;     
`
const DivListMatches = styled.div `
    display:flex;    
    background-image:linear-gradient(to right, rgba(100,195,125,0.1),rgba(164,226,118,0.7));
    border-radius:5px;
    padding:1vw;    
    margin:0.4vw;
    color:white;
    text-shadow: 0 0 1vw black;    
    cursor:default;
    h3{
        padding-left:1vw;
    }
`
const DivHeightMatches = styled.div `
    overflow-y:scroll;
    height:60vh;   
`
const DivRefreshMatches = styled.div `    
    display:flex;    
    justify-content:center;
    margin-top:7vh;
`
const ImgMatches = styled.img `
    width:5vw;
    height:9vh;
    border-radius:100%;    
`
const IconMatchProfile = styled.img `
  width:4vw;
  height:8vh;
  cursor: pointer;    
  &:hover{
    width:3.5vw;
    height:7.5vh;
  }
`

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
            alert('Matches limpados com sucesso !')
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

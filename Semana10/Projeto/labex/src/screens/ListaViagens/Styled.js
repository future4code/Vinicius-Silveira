import styled from 'styled-components'
import Fundo from '../../assets/fundoDestino.jpg'

export const ContainerViagens = styled.div `
    width:100vw;
    height:100vh;
    background-color:#000;
    color:white;
    text-align:center;    
    background-image:url(${Fundo});
`
export const TituloDestino = styled.h2 `
    font-size:2em;        
    text-shadow:0 0 15px black;
`
export const DetalheViagem = styled.div `
    display:grid;    
    grid-template-columns:1fr 1fr 1fr 1fr;  
    margin:5px;  
`
export const DivViagem = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    background-color:rgba(0,0,0,0.3);
    border: 1px solid rgba(255,255,255,0.3);
    border-radius:10px;
    padding:5px;
    margin:5px;
    p{
        text-shadow:10px 0 15px black;
    }
    button{
        margin:0 1vw;    
        width:7vw;
        height:5vh;
        font-size:1.2vw;
    }
`
export const DivBotoes = styled.div `        
    display:flex;
    justify-content:center;
    padding:10px;
`

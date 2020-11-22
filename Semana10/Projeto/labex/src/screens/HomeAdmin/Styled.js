import styled from 'styled-components'
import Fundo from '../../assets/fundoAdmin.jpg'

export const ContainerAdmin = styled.div `
    width:100vw;
    height:100vh;
    background-color:#000;
    color:#fff;
    text-align:center;
    background-image:url(${Fundo});
    h1{
        font-size:5vw;
        -webkit-text-stroke-width: 0.5px;
        -webkit-text-stroke-color:#000;
    }
`
export const DivTextoBotao = styled.div `
    width:50vw;
    height:50vh;
    display:flex;
    flex-direction:column;   
    justify-content:space-around; 
    margin: 0 auto;
    border-radius:10px;
    border:2px solid rgba(255,255,255,0.4);
    background-color:rgba(0,0,0,0.4);
    text-shadow:0 0 15px black;
`
export const DivBotoes = styled.div `
    display:flex;
    justify-content:center;
`
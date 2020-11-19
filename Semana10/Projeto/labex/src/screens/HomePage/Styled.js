import styled from 'styled-components'
import Fundo from '../../assets/fundo.jpg'

export const DivContainter = styled.div`     
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    background-color:green;
    background-image:url(${Fundo});
    width:100vw;
    height:100vh;
    color:white;    
`
export const LogoLabex = styled.img`    
    margin-top:4vh;
    width:35vw;
    height:10vh;
`
export const DivLogo = styled.div`
    display:flex;
    justify-content:center;    
`
export const Conteudo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
export const Titulo = styled.h1`
    font-size:8vw;
`
export const SubTitulo = styled.h1`
    font-size:3vw;
`
export const BotaoHome=styled.button`    
    border:2px solid white;
    background:rgb(255,255,255,0.1);
    margin:0 4vw;
    width:15vw;
    height:10vh;
    color:#fff;
    font-size:1.5vw;
    font-weight:bold;
    text-shadow:0 0 10px #000;
    border-radius:5px;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
        box-shadow: 0 0 40px 40px white inset;
        border:1px solid #000;
        color:#000;
        cursor:pointer;
    }
`
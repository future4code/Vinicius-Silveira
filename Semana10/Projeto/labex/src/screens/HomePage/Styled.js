import styled from 'styled-components'
import Fundo from '../../assets/fundoHome.jpg'

export const DivContainter = styled.div`     
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;
    background-color:#000;
    background-image:url(${Fundo});
    background-repeat:no-repeat;   
    background-position:center;
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

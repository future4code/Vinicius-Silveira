import styled from 'styled-components'
import Fundo from '../../assets/fundoViagem.jpg'

export const ContainerDetalheViagem = styled.div `
    width:100vw;
    height:100vh;
    background:#000;
    background-image:url(${Fundo});
    color:#fff;
    text-align:center;    
    h1{
        font-size:2.5em;
    }
`
export const DivViagem = styled.div `
    display:flex;    
    justify-content:space-around;        
`
export const DetalhesViagem = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;    
    text-shadow:0 0 15px black;    
`
export const DivDadosViagem = styled.div `
    border:2px solid rgba(255,255,255,0.2);
    padding:10px;
    border-radius:10px;
    background:rgba(0,0,0,0.2);    
    width:40vw;    
`
export const Astronautas = styled.div `
    display:grid;
    grid-template-columns: 1fr 1fr 1fr ;  
    align-items:center;
    background:rgba(255,255,255,0.1);
    margin:10px 0;
    border-radius:10px;    
`
export const DivAstronautas = styled.div `
    overflow-y:scroll;    
    height:30vh;
    padding:0 0.5vw;
    ::-webkit-scrollbar {
        width: 1vw;                
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgba(255,255,255,0.4); 
        border-radius: 10px;        
    }

    ::-webkit-scrollbar-thumb {
        background:rgba(255,255,255,0.3); 
        border-radius: 10px;        
    }

    ::-webkit-scrollbar-thumb:hover {
        background:rgba(255,255,255,0.6);        
    }
`
export const BotaoLike = styled.img`
    width:3vw;
    cursor:pointer;
`


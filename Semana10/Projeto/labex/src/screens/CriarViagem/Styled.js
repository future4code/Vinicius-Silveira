import styled from 'styled-components'
import Fundo from '../../assets/fundoNovoDestino.jpg'
export const ContainerCriarViagem = styled.div`
    width:100vw;
    height:100vh;
    background:black;
    color:#fff;
    text-align:center;
    background-image:url(${Fundo});
    h1{
        font-size:2.5em;
    }
`
export const FormViagem = styled.div `
    background:rgba(0,0,0,0.3);
    border-radius:10px;
    border: 2px solid rgba(255,255,255,0.5);
    width:50vw;
    height:40vh;
    margin:0 auto;
    font-size:1.2em;    
    input {
        border-radius:5px;
        width:23vw;
    }
    textarea{
        border-radius:5px;
        width:23vw;
        height:15vh;
    }    
`
export const FlexInput =styled.div `
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    padding:5px 10px;
`
export const AjustePosicao = styled.div `
    display: flex;
`
export const AjustePosicaoBotao = styled.div`
    display:flex;
    flex-direction:column-reverse;
    padding-bottom:1vh;
`
import styled from 'styled-components'
import Fundo from '../../assets/fundoInscricao.jpg'

export const Container = styled.div`
    width:100vw;
    height:100vh;
    background-image:url(${Fundo});         
    color:#fff;
`
export const TituloBemVindo = styled.h1`
    font-size:3em;
    text-align:center;    
`
export const DivFormulario = styled.div`
    display:flex;
    color:#fff;
    text-shadow:0 0 15px white;
    font-weight:bolder;
    width:50%;
    height:50vh;
    background:rgba(0,0,0,0.3);    
    border:1px solid rgba(255,255,255,0.2);
    border-radius:5px;    
    margin:0 auto;
    padding:10px;    
    label{
        font-size:1.2em;
    }
`
export const FormCamposDados = styled.div`
    display:flex;
    flex-direction:column;
`
export const NomeTripulante = styled.input`    
    width:96%;    
    border-radius:5px;
`
export const FormIdadeProfissao = styled.div `
    display:flex;
`
export const Idade = styled.input `    
    width:60%;    
    border-radius:5px;
`
export const Profissao = styled.input `    
    width:93%; 
    border-radius:5px;
`
export const SelectDados = styled.select`     
    width:99%;    
    border-radius:5px;    
`
export const MotivoTripulante = styled.textarea`
    width:97%;
    border-radius:5px;
    height:24vh;
`
export const DireitaFormulario = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between;
`
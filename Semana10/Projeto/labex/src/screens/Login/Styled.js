import styled from 'styled-components'
import usuario from '../../assets/usuario.png'
import email from '../../assets/email.png'
import Fundo from '../../assets/login.jpg'
export const ContainerLogin = styled.div`
    background-color:#000;
    color:#fff;
    width:100vw;
    height:100vh;
    background-image:url(${Fundo});
`
export const FormLogin =styled.div`
    margin:0 auto;
    margin-top:15vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#fff;    
    font-weight:bolder;
    width:50%;
    height:50vh;
    background:rgba(0,0,0,0.5);
    border:1px solid rgba(255,255,255,0.2);
    border-radius:5px;     
    h2{
        font-size:2em;
    }       
`
export const FormDados = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:10px;
    input{
        padding-left:40px;
        border:none;
        background-repeat:no-repeat;
        background-position:5px;
        width:20vw;
        height:5vh;
        font-size:1em;
    }
`
export const InputUsuario = styled.input`
    background-image:url(${usuario});      
`
export const InputSenha = styled.input `
    background-image:url(${email});
`
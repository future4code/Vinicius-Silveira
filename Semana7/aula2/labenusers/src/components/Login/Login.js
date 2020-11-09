import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import logo from '../../img/perfil.png'
import usuario from '../../img/usuario.png'
import email from '../../img/email.png'

const DivContainerFlex = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;                
    width:400px;
    height:300px;
    margin: 100px auto;
    background-color: rgba(255,255,255,0.3);    
    border-radius:50px;
    img{
        margin-top:-60px;
        margin-bottom:30px;
    }
    input{
        height:5vh;
        width:20vw;
        margin-bottom:10px;
        padding-left:40px; //para poder colocar um ícone na lateral da caixa de texto
        border:none;
        background-repeat:no-repeat; // para n repetir o ícone de fundo
        background-position:5px;
    }
    button{
        color:#db7d00;
        background-color:rgba(255,255,255,0.3);
        border:2px solid #db7d00;
        width: 10vw;
        height:5vh;        
    }
    button:hover{
        background-color:rgba(255,255,255,0.6);
        cursor:pointer;
    }
`
const DivInputUsuario = styled.div `
    input{
        background-image:url(${usuario});
    }
`
const DivInputEmail = styled.div`
    input{
        background-image:url(${email})
    }    
`
const DivButtonFlex = styled.div `
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 30px;
`
const DivButtonLista = styled.div `
    display:flex;
    flex-direction:row-reverse;
    margin:10px;    
    button{
        color:#db7d00;
        background-color:rgba(255,255,255,0.6);
        border:2px solid #db7d00;
        width: 10vw;
        height:5vh;    
    }
    button:hover{
        background-color:rgba(255,255,255,0.3);
        cursor:pointer;
    }
`

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers = {
    headers:{
        Authorization:'vinicius-moraes-dumont'
    }
}
class Login extends React.Component{
    state={
        inputUsuario:'',
        inputEmail:''
    }

    onChangeInputUsuario = (event)=>{
        this.setState({inputUsuario:event.target.value})        
    }
    
    onChangeInputEmail = (event)=>{
        this.setState({inputEmail:event.target.value})
        
    }
      
    criarUsuario = ()=>{
        // pega os valores das inputs e joga no body que será usado para criar o usuario
        const body = {
            name: this.state.inputUsuario,
            email: this.state.inputEmail
        }
        // cria o usuario na API
        axios.post(url,body,headers)
        .then(()=>{          
          alert('Usuário criado com sucesso !')
          this.setState({inputUsuario:'',inputEmail:''})
        }).catch(()=>{
          alert('Erro - Verifique se os campos estão corretos !')
        })      
    }
    
    render(){
        return(
            <div>                                   
                <DivContainerFlex>         
                    <img src={logo} alt="logo"/>                             
                    <DivInputUsuario>
                        <input placeholder="Nome" value={this.state.inputUsuario} onChange={this.onChangeInputUsuario}></input>
                    </DivInputUsuario>              
                    <DivInputEmail>
                        <input placeholder="email" value={this.state.inputEmail} onChange={this.onChangeInputEmail}></input>
                    </DivInputEmail>                                            
                    <DivButtonFlex>
                        <button onClick={this.criarUsuario}>Cadastrar</button>    
                    </DivButtonFlex>                            
                </DivContainerFlex>    
                <DivButtonLista>
                    <button onClick={this.props.onClickLista}>Usuários</button>
                </DivButtonLista>
            </div>
        )
    }
}
export default Login;

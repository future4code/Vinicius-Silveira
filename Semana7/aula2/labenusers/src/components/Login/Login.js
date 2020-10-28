import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'

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
        axios.post(url,body,{
            headers:{
                Authorization:'vinicius-moraes-dumont'
            }
        }).then(()=>{          
          alert('Usuário criado com sucesso !')
          this.setState({inputUsuario:'',inputEmail:''})
        }).catch(()=>{
          alert('Erro - Verifique se os campos estão corretos !')
        })      
    }
    
    render(){
        return(
            <div>
                <button onClick={this.props.onClickLista}>Ir para página da lista</button>
                <div>                    
                    <label>Nome: </label>
                    <input placeholder="Nome" value={this.state.inputUsuario} onChange={this.onChangeInputUsuario}></input>
                    <br/>
                    <label>Email: </label>
                    <input placeholder="email" value={this.state.inputEmail} onChange={this.onChangeInputEmail}></input>
                    <br/>
                    <button onClick={this.criarUsuario}>Salvar</button>                    
                </div>
            </div>
        )
    }
}
export default Login;
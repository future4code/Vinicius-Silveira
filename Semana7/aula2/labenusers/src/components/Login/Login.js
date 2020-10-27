import React from 'react'
import styled from 'styled-components'

class Login extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.onClickLista}>Ir para página da lista</button>
                <div>                    
                    <label>Nome: </label>
                    <input placeholder="Nome" value={this.props.inputUsuario} onChange={this.props.onChangeInputUsuario}></input>
                    <br/>
                    <label>Email: </label>
                    <input placeholder="email" value={this.props.inputEmail} onChange={this.props.onChangeInputEmail}></input>
                    <br/>
                    <button onClick={this.props.criarUsuario}>Salvar</button>                    
                </div>
            </div>
        )
    }
}
export default Login;
import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Login from './components/Login/Login'
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios'

class App extends React.Component{
  state={
    telaCadastro:true,
    usuarios:[],
    inputUsuario:'',
    inputEmail:''
  }
  //---------Função controlada que seta o estado do componente em false
  trocarComponente = ()=>{
    this.setState({telaCadastro:false})
  }
  //---------Função controlada que seta o estado do componente em true
  voltarComponente = ()=>{
    this.setState({telaCadastro:true})
  }

  onChangeInputUsuario = (event)=>{
    this.setState({inputUsuario:event.target.value})
  }
  onChangeInputEmail = (event)=>{
    this.setState({inputEmail:event.target.value})
  }
  criarUsuario = ()=>{
    const body = {
      name: this.state.inputUsuario,
      email: this.state.inputEmail
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',body,{
      headers:{
        Authorization:'vinicius-moraes-dumont'
      }
    }).then((res)=>{
      this.setState({inputUsuario:'',inputEmail:''})
      alert('Usuário criado com sucesso !')
    }).catch((error)=>{
      alert('Erro - Verifique se os campos estão corretos !')
    })      
  }
  render(){
    //-------Função que verica se o estado está em true ou false e chama o componente ao clicar nos botões
    const trocaTela = ()=>{
      if(this.state.telaCadastro){
        return <Login           
          inputUsuario={this.state.inputUsuario}
          inputEmail={this.state.inputEmail}
          onChangeInputUsuario={this.onChangeInputUsuario}
          onChangeInputEmail={this.onChangeInputEmail}
          onClickLista={this.trocarComponente} 
          criarUsuario={this.criarUsuario}
        />
      }else{
        return <ListaUsuarios onClickLogin={this.voltarComponente}/>
      }
    }
    return(
      <div>
        {trocaTela()}
      </div>
    );
  }
}

export default App;
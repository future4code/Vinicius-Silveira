import React from 'react'
import Login from './components/Login/Login'
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios'
import styled from 'styled-components'
import fundo from './img/fundo.jpg'

const StyledDiv = styled.div`    
  font-family: "Trebuchet MS", Helvetica, sans-serif;
  border: 1px solid white;  
  background: url(${fundo});
  width:900px;  
  margin:0 auto;  
`

class App extends React.Component{
  state={
    telaCadastro:true,        
  }
  
  //---------Função controlada que seta o estado do componente em false
  trocarComponente = ()=>{
    this.setState({telaCadastro:false})
  }

  //---------Função controlada que seta o estado do componente em true
  voltarComponente = ()=>{
    this.setState({telaCadastro:true})
  }
   
  render(){    
    //-------Função que verica se o estado está em true ou false e chama o componente ao clicar nos botões
    const trocaTela = ()=>{
      if(this.state.telaCadastro){
        return <Login                     
          onClickLista={this.trocarComponente}           
        />
      }else{
        return <ListaUsuarios 
        onClickLogin={this.voltarComponente}               
        />
      }
    }

    return(
      <StyledDiv>        
        {trocaTela()}             
      </StyledDiv>
    );
  }
}

export default App;

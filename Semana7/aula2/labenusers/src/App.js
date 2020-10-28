import React from 'react'
import Login from './components/Login/Login'
import ListaUsuarios from './components/ListaUsuarios/ListaUsuarios'
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
      <div>
        {trocaTela()}             
      </div>
    );
  }
}

export default App;

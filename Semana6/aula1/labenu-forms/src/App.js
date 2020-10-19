import React from 'react';
import DadosGerais from "./Components/Etapa1";
import InfoSuperior from "./Components/Etapa2";
import InfoGeraisEnsino from "./Components/Etapa3";
import Final from "./Components/Final";

//Transforma App em componente de classe
class App extends React.Component{
  state = {
    estadoEtapa: 1
  };
  
  renderizaEtapa = () =>{
    // não é necessário o uso do break, pois com o return ela interrompe o switch
    switch (this.state.estadoEtapa){
      case 1:
        return <DadosGerais/>
      case 2:
        return <InfoSuperior/>
      case 3:
        return <InfoGeraisEnsino/>
      case 4:
        return <Final/>
      default:
        return <DadosGerais/>        
    }
  }

  avancaEtapa = ()=> {
    /*if(this.state.estadoEtapa<4){
      this.setState({
        estadoEtapa: this.state.estadoEtapa+1
      })
    } */
    const resultado = this.state.estadoEtapa<4 ? 
      this.setState({estadoEtapa: this.state.estadoEtapa+1}) :
      this.setState({estadoEtapa: this.state.estadoEtapa})
    return resultado;    
  }
  voltaEtapa = ()=>{
    const resultado = this.state.estadoEtapa>1 ?
      this.setState({estadoEtapa:this.state.estadoEtapa-1}) :
      this.setState({estadoEtapa:this.state.estadoEtapa})
      return resultado
  }
  render(){
    return(
      <div>
        {this.renderizaEtapa()}
        <br/>
        <button onClick={this.voltaEtapa}>Voltar Etapa</button>
        <button onClick={this.avancaEtapa} >Próxima Etapa</button>

      </div>
    )
  }
}
export default App
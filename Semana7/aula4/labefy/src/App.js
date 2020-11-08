import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Principal from './components/Principal/Principal'
import VisualizarPlaylist from './components/VisualizarPlayList/VisualizarPlayList'
import CriarPlaylist from './components/CriarPlayList/CriarPlaylist'
import DetalhePlaylist from './components/DetalhePlaylist/DetalhePlaylist'

class App extends React.Component{
  state={
    trocaComponente:false
  }
  
  alterarEstado = ()=>{        
    this.setState({trocaComponente:!this.state.trocaComponente})    
  }
  
  render(){        
    const trocarComponente = ()=>{
      if(this.state.trocaComponente){
        return <VisualizarPlaylist
          onClickVisualizarPlaylist={this.alterarEstado}/>        
      }else{
        return <Principal
          onClickPrincipal={this.alterarEstado}/>
      }
    }

    return(
      <div>
        <h1>Labefy</h1>        
        {trocarComponente()}                 
      </div>
    )
  }
}
  
export default App 
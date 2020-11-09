import React from 'react'
import styled from 'styled-components'
import Heroes from './components/Heroes/Heroes'
import Fundo from './img/fundo.jpg'

const DivHome = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background:#000;
  width:100vw;
  height:100vh;  
`
const ImgLogo = styled.img`
  cursor:pointer;  
`
class App extends React.Component  {
  state={
    switchScreen: false
  }

  onClickSwitchScreen = ()=>{
    this.setState({switchScreen:!this.state.switchScreen})    
  }

  render(){    
    const SwitchScreen = ()=>{
      if (this.state.switchScreen){
        return (
          <Heroes
            onClickSwitchScreen={this.onClickSwitchScreen}
          />)             
      }else{
        return(          
            <DivHome>              
              <ImgLogo src={Fundo} onClick={this.onClickSwitchScreen}/>
            </DivHome>                         
        )        
      }
    }
    return (
      <div>        
        {SwitchScreen()}              
      </div>
    )
  }
}

export default App;

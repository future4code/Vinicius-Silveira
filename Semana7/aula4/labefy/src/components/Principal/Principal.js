import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Principal extends React.Component{
    render(){
        return(
            <div>
                Principal
                <button onClick={this.props.onClickPrincipal}>ABRIR O WEB PLAYER</button>
            </div>
        )    
    }
}
export default Principal
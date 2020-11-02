import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class VisualizarPlayList extends React.Component{    
    render(){        
        return(
            <div>
                VisualizarPlayList
                <button onClick={this.props.onClickVisualizarPlaylist}>VOLTAR</button>
            </div>
        )
    }
}

export default VisualizarPlayList
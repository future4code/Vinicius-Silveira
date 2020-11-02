import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class CriarPlaylist extends React.Component{
    state={
        inputCriarLista:''
    }
    onChangeInputCriarLista = (event)=>{
        this.setState({inputCriarLista:event.target.value})
    }
    onClickSalvarPlaylist = ()=>{
        this.setState({inputCriarLista:''})
    }
    render(){
        return(
            <div>
                <input placeholder="Nome Playlist" onChange={this.onChangeInputCriarLista} value={this.state.inputCriarLista}></input>
                <button onClick={this.onClickSalvarPlaylist}>Salvar Playlist</button>
            </div>
        )
    }
}

export default CriarPlaylist
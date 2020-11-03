import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers:{
        Authorization:'vinicius-moraes-dumont'
    }
}

class CriarPlaylist extends React.Component{
    state={
        inputCriarLista:''
    }

    onChangeInputCriarLista = (event)=>{
        this.setState({inputCriarLista:event.target.value})
    }    

    criarPlaylist = ()=>{
        const body = {
            name: this.state.inputCriarLista
        }
        axios.post(url,body,headers)
        .then(()=>{
            alert('Playlist Criada com Sucesso !')
            this.setState({inputCriarLista:""})
        })
        .catch(()=>{
            alert('Erro - Verifique se os campos estão corretos ou não inseriu Playlist existente !')
        })
    }
    render(){
        return(
            <div>
                <h1>Criar Playlist</h1>
                <input placeholder="Nome Playlist" onChange={this.onChangeInputCriarLista} value={this.state.inputCriarLista}></input>
                <button onClick={this.criarPlaylist}>Salvar Playlist</button>
            </div>
        )
    }
}

export default CriarPlaylist
import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import DetalhePlaylist from '../DetalhePlaylist/DetalhePlaylist'
import CriarPlaylist from '../CriarPlayList/CriarPlaylist'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
const headers = {
    headers:{
        Authorization:'vinicius-moraes-dumont'
    }
}

class VisualizarPlayList extends React.Component{    
    state={
        playlists:[],    
        playlistDetalhe:[],
        mostraDetalhes:false,
        id:''    
    }

    componentDidMount = ()=>{
        this.buscarPlaylist()        
    }
    componentDidUpdate = ()=>{
        this.buscarPlaylist()        
    }

    buscarPlaylist = ()=>{
        axios.get(url,headers)        
        .then((resposta)=>{
            this.setState({playlists:resposta.data.result.list})            
        })
        .catch((erro)=>{            
            alert('Erro ao buscar Playlists')
        })
    }

    buscarPlaylistDetalhe = (playlistId)=>{
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,headers)
        .then((resposta)=>{            
            this.setState({playlistDetalhe:resposta.data.result.tracks})
        })
        .catch((erro)=>{
            console.log('Erro',erro.messaage)
            alert('Playlist Vazia')
        })                   
        this.setState({mostraDetalhes:!this.state.mostraDetalhes})     
    }

    deletarPlaylist = (playlistId)=>{
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,headers)
        .then(()=>{
            alert('Playlist Deletada com Sucesso !')
        })
        .catch((erro)=>{
            alert(erro.messaage)
        })

    }

    render(){               
        const mapearLista = this.state.playlists.map((dados)=>{
            return (
                <p key={dados.id}> 
                    {dados.name} 
                    <button onClick={()=>{this.buscarPlaylistDetalhe(dados.id)}}>
                        Detalhes
                    </button>
                    <button onClick={()=>{this.deletarPlaylist(dados.id)}}>Deletar</button>                    
                </p>              
            )
        })        
        const chamaDetalhes = ()=>{
            if(this.state.mostraDetalhes){
                return <DetalhePlaylist
                        detalhes={this.state.mostraDetalhes}    
                        detalhesPlaylist={this.state.playlistDetalhe}
                    />
            }
        }
        return(
            <div>       
                <CriarPlaylist/>         
                <button onClick={this.props.onClickVisualizarPlaylist}>VOLTAR</button>
                <h1>Playlists Cadastradas</h1>
                {mapearLista}
                {chamaDetalhes()}
            </div>
        )
    }
}

export default VisualizarPlayList
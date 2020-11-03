import React from 'react'

class DetalhePlaylist extends React.Component{            
    render(){                
        const visualizarPlaylist = this.props.detalhesPlaylist.map((dados)=>{
            return(
                <div key={dados.id}>
                    <h1>Detalhes Playlist</h1>
                    <p>
                        Música: {dados.name}                                                            
                    </p>                 
                    <p>
                        Artista: {dados.artist}
                    </p>
                    <p>
                        Url: {dados.url}
                    </p>

                </div>
            )
        })        
        return(
            <div>      
                {visualizarPlaylist}
            </div>
        )
    }
}

export default DetalhePlaylist
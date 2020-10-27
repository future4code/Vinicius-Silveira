import React from 'react'

class ListaUsuarios extends React.Component{
    render(){
        return(
            <div>
                <button onClick={this.props.onClickLogin}>Ir para página de cadastro</button>
                <div>                    
                    <h1>Usuários Cadastrados</h1>                 
                </div>
            </div>
        )
    }
}
export default ListaUsuarios;
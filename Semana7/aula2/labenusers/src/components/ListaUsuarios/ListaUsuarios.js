import React from 'react'
import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
const headers ={
    headers:{
        Authorization:'vinicius-moraes-dumont'
    }
}
class ListaUsuarios extends React.Component{
    state={
        usuarios:[],        
    }
    // Monta o componente e chama a função para pegar os usuários
    componentDidMount = ()=>{
        this.pegarUsuario();
    }
    // Ao atualizar o componente chama a função para pegar os usuários
    componentDidUpdate = ()=>{
        this.pegarUsuario();
    }

    pegarUsuario = ()=>{    
        axios.get(url,headers)         
        .then((resposta)=>{
          this.setState({usuarios:resposta.data});
        }).catch((erro)=>{
          console.log(erro.message);
        })
    }
    
    deletaUsuario =(id)=>{                        
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,{
            headers:{
                Authorization:'vinicius-moraes-dumont'
            }
        }).then(()=>{
            alert('Usuário deletado com sucesso')
        }).catch((erro)=>{
            alert(erro.message)
        })
    }
    
    render(){
        const atualizaLista = this.state.usuarios.map((dados)=>{
            return (
                <p key={dados.id}> 
                    {dados.name} 
                    <button onClick={()=>{this.deletaUsuario(dados.id)}}>Deletar</button> 
                </p>
            )
        })

        return(
            <div>
                <button onClick={this.props.onClickLogin}>Ir para página de cadastro</button>
                <div>                    
                    <h1>Usuários Cadastrados</h1>                           
                    {atualizaLista}                      
                </div>
            </div>
        )
    }
}
export default ListaUsuarios;

import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const DivContainerFlex = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;                
    width:400px;    
    margin: 100px auto;
    background-color: rgba(255,255,255,0.3);    
    border-radius:50px;   
    h1{
        color:white;        
    } 
`
const DivUsuarios = styled.div `
    display:flex;
    flex-direction:row;
    justify-content:space-between;    
    width:300px;
    button{
        height:20px;
        margin-top:15px;
        border-radius:80px;
        color:#fff;
        background-color:rgba(255,51,0,0.3);
        font-weight:bolder;
    }
    button:hover{
        background-color:rgba(255,0,0,0.6);
        cursor:pointer;
    }
`
const DivButtonLista = styled.div `
    display:flex;    
    margin:10px;    
    button{
        color:#db7d00;
        background-color:rgba(255,255,255,0.6);
        border:2px solid #db7d00;
        width: 10vw;
        height:5vh;    
    }
    button:hover{
        background-color:rgba(255,255,255,0.3);
        cursor:pointer;
    }
`
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
                <DivUsuarios key={dados.id}>
                    <p> 
                        {dados.name}                      
                    </p>
                    <button onClick={()=>{this.deletaUsuario(dados.id)}}>X</button>
                </DivUsuarios>
            )
        })

        return(
            <div>                
                <DivContainerFlex>                    
                    <h1>Usuários Cadastrados</h1>                           
                    {atualizaLista}                      
                </DivContainerFlex>
                <DivButtonLista>
                    <button onClick={this.props.onClickLogin}>Cadastro</button>
                </DivButtonLista>
            </div>
        )
    }
}
export default ListaUsuarios;

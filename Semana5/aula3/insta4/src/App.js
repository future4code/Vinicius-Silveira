import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
state = {
    post:[
      {
        nomeUsuario:'Vinicius',
        fotoUsuario:'https://picsum.photos/50/50?a=1',
        fotoPost:'https://picsum.photos/200/150?a=1'
      },
      {
        nomeUsuario:'Paola',
        fotoUsuario:'https://picsum.photos/50/60?a=2',
        fotoPost:'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario:'Viviani',
        fotoUsuario:'https://picsum.photos/50/70?a=3',
        fotoPost:'https://picsum.photos/200/150?a=3'
      }
    ],
    valorInputUsuario: '',
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
}

adicionaPost = () => {  
  const novoPost = {    
    nomeUsuario: this.state.valorInputUsuario,    
    fotoUsuario: this.state.valorInputFotoUsuario,
    fotoPost: this.state.valorInputFotoPost
  };

  const novoPosts = [...this.state.post, novoPost];    
    this.setState({ post: novoPosts });
    this.setState({
      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    });
  };

  onChangeInputUsuario = (event) => {    
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {    
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {    
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePost = this.state.post.map((dados)=>{
      return (
        <Post
          nomeUsuario={dados.nomeUsuario}
          fotoUsuario={dados.fotoUsuario}
          fotoPost={dados.fotoPost}
        />
      )

    })
    return (
      <div className={'app-container'}>       
      <input            
            value={this.state.valorInputUsuario}            
            onChange={this.onChangeInputUsuario}
            placeholder={"Usuário"}
          />
          <input            
            value={this.state.valorInputFotoUsuario}            
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Link com sua foto"}
          />
          <input            
            value={this.state.valorInputFotoPost}            
            onChange={this.onChangeInputFotoPost}
            placeholder={"Link com foto do post"}
          />
          <button onClick={this.adicionaPost}>Adicionar Post</button>
        {listaDePost}
      </div>
    );
  }
}

export default App;

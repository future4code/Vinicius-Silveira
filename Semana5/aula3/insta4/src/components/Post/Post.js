import React from 'react'
import './Post.css'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoBranco from '../../img/bookmark-white.svg'
import iconeMarcacaoPreto from '../../img/bookmark.svg'
import iconeCompartilhar from '../../img/share.svg'


class Post extends React.Component {
  state = {
    curtido: false, // alterna entre o ícone preto e branco da curtida
    numeroCurtidas: 0, // número de curtidas mostrada do lado do ícone
    comentando: false, // exibe o input e o botão de enviar o comentário
    numeroComentarios: 0, // quantidade de comentários enviados
    marcando: false,
    compartilhar:false
  }

  onClickCurtida = () => {    
    this.setState({      
      curtido: !this.state.curtido      // fica alternado o valor entre true e false a cada clicada
    })
    if (!this.state.curtido){          // se o valor de curtido for true ele soma
      this.setState({numeroCurtidas:this.state.numeroCurtidas+1})
    }else{
      this.setState({numeroCurtidas:this.state.numeroCurtidas-1})
    }
  }

  //essa função faz mostrar o input e o botão enviar alterando o valor da variável comentando
  onClickComentario = () => {
    this.setState({ 
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1          
    })
    
  }

  onClickMarcado = ()=>{
    this.setState({
      marcando: !this.state.marcando
    })
  }

  onClickCompartilhar = ()=>{
    this.setState({
      compartilhar: !this.state.compartilhar      
    })    
  }

  render() {
    let iconeCurtida      
    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto       
    } else {
      iconeCurtida = iconeCoracaoBranco          
    }

    let componenteComentario
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    let iconeMarcacao
    if(this.state.marcando){
      iconeMarcacao = iconeMarcacaoPreto
    }else{
      iconeMarcacao = iconeMarcacaoBranco
    }    

    let componenteCompartilhar
    if(this.state.compartilhar){
      componenteCompartilhar = <SecaoCompartilhar/>
    }

    return <div className={'post-container'}>
      <div className={'post-header'}>
        <img className={'user-photo'} src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </div>

      <img className={'post-photo'} src={this.props.fotoPost} alt={'Imagem do post'}/>

      <div className={'post-footer'}>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />
        
        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <IconeComContador
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcado}          
        />

        <IconeComContador
          icone={iconeCompartilhar}
          onClickIcone={this.onClickCompartilhar}          
        />

      </div>
      {componenteComentario}       
      {componenteCompartilhar}       
    </div>    
  }
}

export default Post
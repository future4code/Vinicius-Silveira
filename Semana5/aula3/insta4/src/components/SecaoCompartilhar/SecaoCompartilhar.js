import React, {Component} from 'react'
import './SecaoCompartilhar.css'


import iconeFacebook from '../../img/facebook.svg'
import iconeInstagram from '../../img/instagram.svg'
import iconeTwitter from '../../img/twitter.svg'

export class SecaoCompartilhar extends Component {	
    state = {
        valorInput:""
    }	
    
    onClickFacebook = ()=>{
        console.log('Post compartilhado no Facebook com a mensagem: ',this.state.valorInput)
        this.setState({
            valorInput:""
        })
    }

    onClickInstagram = ()=>{
        console.log('Post compartilhado no Instagram com a mensagem: ',this.state.valorInput)
        this.setState({
            valorInput:""
        })
    }

    onClickTwitter = () =>{
        console.log('Post compartilhado no Twitter com a mensagem: ',this.state.valorInput)
        this.setState({
            valorInput:""
        })
    }

    onChangeComentario = (event)=>{
        this.setState({valorInput:event.target.value})        
    }

	render() {
        return <div className = {'icone-compartilhar'}>
            <div className={'img-compartilhar'}>
                <img id={'facebook'} alt={'Icone'} src={iconeFacebook} onClick={this.onClickFacebook}/>
                <img id={'instagram'} alt={'Icone'} src={iconeInstagram} onClick={this.onClickInstagram}/>
                <img id={'twitter'} alt={'Icone'} src={iconeTwitter} onClick={this.onClickTwitter}/>
            </div>
            <div className={'input-compartilhar'}>
                <input 
                value={this.state.valorInput} 
                placeholder={'Comentário'}
                onChange={this.onChangeComentario}
                />
            </div>
        </div>
	}
}

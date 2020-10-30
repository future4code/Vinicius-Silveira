import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Fundo from '../../img/fundo.jpg'
// api e private key fornecidas pela marvel, timestamp gerado de um valor de agora e hash
// hash criada através de um md5 da (ts+privateKey+apiKey) na página js md5 demo
const apiKey = '6847877bf6c28ecc30a02c612cbfdfb0'
const privateKey = 'd5135dcbfff803b7c7861ea0e48fc9a644fcfc44'
const timeStamp = '1565045589'
const hash = '5615b2461f3a052ee6b6e3cd38e03204'
const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=50`

const DivHome = styled.div`      
    background:#000;    
`
const DivImgMarvel = styled.div`
    display:flex;    
    justify-content:center;
    border-bottom:4px solid red;    
    margin-bottom:20px;
`
const ImgLogo = styled.img`
  cursor:pointer;  
  width:10vw;
  height:10vh;  
  margin:20px 0;
`
const ImgHeroes = styled.img`
    width:300px;
    height:300px;
    border:3px solid red;
    border-radius:10px;
`
const DivGridHeroes = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows:1fr;            
    justify-items:center;
`
const TextGridHeroes = styled.p`
    width:300px;
    color:#fff;
`
class Heroes extends React.Component {
    state={
        heroesList:[]         
    }

    componentDidMount = ()=>{
        this.getMarvelHeroes();
    }

    getMarvelHeroes = ()=>{
        axios.get(url)
        .then((response)=>{
            this.setState({heroesList:response.data.data.results})            
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    /*onChangeSelectHeroes = (id)=>{         
        console.log('ID: ',id)       
        const urlId = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=6`        
        axios.get(urlId)
        .then ((response)=>{
            const imgUrlHeroes = response.data.results.thumbnail.path
            const imgExtensionHeroe = response.data.results.thumbnail.extension
            this.setState({imageUrl:imgUrlHeroes+'.'+imgExtensionHeroe})
        }).catch((error)=>{
            console.log('erro: ',error.message)
        })
    }*/

    render(){
        console.log('Personagensss',this.state.heroesList)        
        const renderHeroesList = this.state.heroesList.map((heroes)=>{            
            return (               
                    <div>
                        <div>
                            <ImgHeroes src={heroes.thumbnail.path+'.'+heroes.thumbnail.extension}/>
                                <TextGridHeroes><strong>Name:</strong> {heroes.name}</TextGridHeroes>
                                <TextGridHeroes><strong>Description:</strong> {heroes.description}</TextGridHeroes>
                        </div>
                    </div>                 
                )                        
        })
        return(
            <DivHome>
                <DivImgMarvel>
                    <ImgLogo src={Fundo} onClick={this.props.onClickSwitchScreen}/>
                </DivImgMarvel>
                <DivGridHeroes>                              
                    {renderHeroesList}                            
                </DivGridHeroes>                
            </DivHome>
        )
    }
}

export default Heroes
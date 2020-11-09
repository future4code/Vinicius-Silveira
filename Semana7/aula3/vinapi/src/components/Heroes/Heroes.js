import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Fundo from '../../img/fundo.jpg'
// api e private key fornecidas pela marvel, timestamp gerado de um valor de agora e hash
// hash criada através de um md5 da (ts+privateKey+apiKey) na página js md5 demo
const apiKey = '6847877bf6c28ecc30a02c612cbfdfb0'
const timeStamp = '1565045589'
const hash = '5615b2461f3a052ee6b6e3cd38e03204'

const DivHome = styled.div`      
    background:#000; 
    height:100vh;   
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
    display:grid;
`
const DivFlexSelectHeroes = styled.div`
    display:flex;    
    align-items:center;
    justify-content:center;    
    margin-bottom:20px;    
    height:20px;
`
const DivFlexHeroes = styled.div `
    display:flex;    
    justify-content:center;
    background-color:#000;    
`
const DivFlexContent = styled.div`
    display:flex;
    flex-direction:column;    
    padding-left:10px;
`
const TextFlexHeroes = styled.p`
    width:300px;
    color:#fff;
`
class Heroes extends React.Component {
    
    state={
        heroesList:[],
        imageUrl:'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
        heroesDescription:'',
        heroesName:'3-D Man',
        offSetHeroes:'0',
        filter:[]
    }

    componentDidMount = ()=>{
        this.getMarvelHeroes();   
        this.montFilter();     
    }    
    componentDidUpdate = ()=>{
        this.getMarvelHeroes()
    }
    getMarvelHeroes = ()=>{
        const url = `https://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=100&offset=${this.state.offSetHeroes}`
        axios.get(url)
        .then((response)=>{
            this.setState({heroesList:response.data.data.results})            
        })
        .catch((error)=>{
            console.log(error.message);
        })
    }

    onChangeSelectHeroes = (event)=>{                        
        const urlId = `https://gateway.marvel.com/v1/public/characters/${event.target.value}?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}&limit=100&offset=${this.state.offSetHeroes}`        
        axios.get(urlId)
        .then ((response)=>{            
            const imgUrlHeroes = response.data.data.results[0].thumbnail.path
            const imgExtensionHeroes = response.data.data.results[0].thumbnail.extension
            this.setState({imageUrl:imgUrlHeroes+'.'+imgExtensionHeroes})
            this.setState({heroesDescription:response.data.data.results[0].description})
            this.setState({heroesName:response.data.data.results[0].name})            
        }).catch((error)=>{
            console.log('erro: ',error.message);
        })
    }
    onChangeSelectHeroesFilter = (event)=>{
        this.setState({offSetHeroes:event.target.value})               
    }
    
    montFilter = ()=>{        
        let filterOffsetArray=[]
        for(let i=0; i<=14;i++){            
            let filterOffset = 100*i            
            filterOffsetArray.push({'id':i,'value':filterOffset})
        }
        this.setState({filter:filterOffsetArray})
    }

    render(){        
        const renderHeroesList = this.state.heroesList.map((heroes)=>{            
            return <option key={heroes.id} value={heroes.id}>{heroes.name}</option>                    
            
        })      
        const renderHeroesFilter = this.state.filter.map((filters)=>{
            return <option key ={filters.id}value={filters.value}>{filters.value} - {filters.value+100}</option>
        })                
        return(
            <DivHome>
                <DivImgMarvel>
                    <ImgLogo src={Fundo} onClick={this.props.onClickSwitchScreen}/>
                </DivImgMarvel>                
                <DivFlexSelectHeroes>
                    <TextFlexHeroes><strong>Select Your Hero</strong></TextFlexHeroes>
                    <select onChange={this.onChangeSelectHeroes}>                                  
                        {renderHeroesList} 
                    </select>   
                    <TextFlexHeroes><strong>Filter</strong></TextFlexHeroes>
                    <select onChange={this.onChangeSelectHeroesFilter}>                        
                        {renderHeroesFilter}
                    </select>                       
                </DivFlexSelectHeroes>
                <DivFlexHeroes>
                <ImgHeroes src={this.state.imageUrl}/>
                    <DivFlexContent>                        
                        <TextFlexHeroes><strong>Name: </strong>{this.state.heroesName}</TextFlexHeroes>
                        <TextFlexHeroes><strong>Description: </strong>{this.state.heroesDescription}</TextFlexHeroes>
                    </DivFlexContent>
                </DivFlexHeroes>
            </DivHome>
        )
    }
}
export default Heroes
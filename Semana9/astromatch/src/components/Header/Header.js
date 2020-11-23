import React, {useState} from 'react'
import Pretenders from '../Pretenders/Pretenders'
import Matches from '../Matches/Matches'
import {DivHeaderProfile,ColorTitleAstro,ColorTitleMatch,DivIconMatch} from './Styled'
import {IconMatchProfile,DivHeaderMatches,DivIconProfile} from './Styled'
import {DivContainer,DivProfilesMatches} from './Styled'
import iconMatch from '../../assets/icon-match.png'
import iconBack from '../../assets/icon-back.png'


function Header () {
  const [switchScreen,setSwitchScreen]=useState(true)

  const onClickchangeState = ()=>{
    setSwitchScreen(!switchScreen)
  }
  
  const switchComponent = ()=>{
    if (switchScreen){
      return (
        <DivProfilesMatches>              
            <DivHeaderProfile>
                <div>
                    <ColorTitleMatch><ColorTitleAstro>astro</ColorTitleAstro>match</ColorTitleMatch>
                </div>                    
                <DivIconMatch>
                    <IconMatchProfile src={iconMatch} onClick={onClickchangeState}/>
                </DivIconMatch>               
            </DivHeaderProfile>           
            <Pretenders/>
        </DivProfilesMatches>      
      )
    }else{
      return (
        <DivProfilesMatches>
            <DivHeaderMatches>
                <DivIconProfile>
                    <IconMatchProfile src={iconBack} onClick={onClickchangeState}/>
                </DivIconProfile>  
                <div>
                    <ColorTitleMatch><ColorTitleAstro>astro</ColorTitleAstro>match</ColorTitleMatch>
                </div>                                 
            </DivHeaderMatches> 
            <Matches/>
        </DivProfilesMatches>               
      )
    }  
  }
  return(
    <DivContainer>                          
        {switchComponent()}               
    </DivContainer>
  )
}

export default Header


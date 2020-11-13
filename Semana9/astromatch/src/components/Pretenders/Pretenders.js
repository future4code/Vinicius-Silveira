import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {ImgProfile,DivContainer,AlignImgBio,DivContentProfile,BioProfile} from './Styled'
import {IconMatchProfile,DivLikeDislike,DivRefreshMatches} from './Styled'
import iconLike from '../../assets/icon-like.png'
import iconDislike from '../../assets/icon-dislike.png'
import iconRefresh from '../../assets/icon-refresh.png'

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person'
const urlPut = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/clear'

function Pretenders (){
    const [profiles,setProfiles]=useState({})
    const [choiceProfile,setChoiceProfile]=useState(false)
    const [renderComponent,setRenderComponent]=useState(false)

    const getProfileToChoose = ()=>{
        axios.get(urlGet) 
        .then((res)=>{
            setProfiles(res.data.profile)            
        })
        .catch((err)=>{
            alert(`Erro ${err}`)
        })
    }

    const postChooseMatches = ()=>{
        const body={
            id:profiles.id,
            choice:choiceProfile
        }
        axios.post(urlPost,body)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            alert('Erro: ',err.message)
        })
    }

    const putMatches = ()=>{
        axios.put(urlPut)
        .then(()=>{
            alert('Matches limpos com sucesso !')
        })
        .catch(()=>{
            alert('Erro ao limpar os macthes')
        })
    }

    const onClickLike = ()=>{
        setChoiceProfile(true)            
        setRenderComponent(!renderComponent)
        postChooseMatches()
    }

    const onClickDislike = ()=>{
        setChoiceProfile(false)                
        setRenderComponent(!renderComponent)
        postChooseMatches()
    }

    const onClickRefreshMatches = ()=>{
        putMatches()
        getProfileToChoose()
    }
                    
    useEffect(()=>{
        getProfileToChoose()
    },[renderComponent])
            
    const showProfiles = ()=>{
        if(profiles){
            return(
                <div>                    
                    <AlignImgBio>
                        <ImgProfile src={profiles.photo} alt='foto'/>                                
                    </AlignImgBio>
                    <DivContentProfile>
                        <h2>{profiles.name} , </h2>    
                        <h2>{profiles.age}</h2>                                                  
                    </DivContentProfile>
                    <BioProfile>{profiles.bio}</BioProfile>                  
                </div>   
            )
        }else{
            return(
                <div>
                    <h2>Parabéns você zerou o astromatch</h2>
                </div>
            )
        }
    }
    return(    
        <DivContainer>    
            {showProfiles()}                             
            <DivLikeDislike>                
                <div>
                    <IconMatchProfile src={iconDislike} onClick={onClickDislike}/>
                </div>
                <div>
                    <IconMatchProfile src={iconLike} onClick={onClickLike}/>
                </div>                        
            </DivLikeDislike>
            <DivRefreshMatches>
                <IconMatchProfile src={iconRefresh} onClick={onClickRefreshMatches}/>
            </DivRefreshMatches>           
        </DivContainer>
    )
}
export default Pretenders

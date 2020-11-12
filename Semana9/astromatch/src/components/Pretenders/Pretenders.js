import React, { useEffect, useState } from 'react'
import axios from 'axios'

const urlGet = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/person'
const urlPost = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/vinicius/choose-person'

function Pretenders (props){
    const [profiles,setProfiles]=useState({})
    const [choiceProfile,setChoiceProfile]=useState(false)

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

    const onClickLike = ()=>{
        setChoiceProfile(true)    
        getProfileToChoose()    
    }

    const onClickeDislike = ()=>{
        setChoiceProfile(false)        
        getProfileToChoose()
    }

    useEffect(()=>{
        getProfileToChoose()
    },[])
    
    useEffect(()=>{
        postChooseMatches()
    },[profiles])
    
    console.log(choiceProfile)
    return(
    
        <div>
            <button onClick={props.onClickPretenders}>Matches</button>
            <div>
                <img src={profiles.photo} alt='foto'/>
            </div>
            <div>
                <p>Name: {profiles.name}</p>    
                <p>Age: {profiles.age}</p>    
                <p>{profiles.bio}</p>        
            </div>
            <div>
                <button onClick={onClickeDislike}>Dislike</button>
                <button onClick={onClickLike}>Like</button>
            </div>
        </div>
    )
}

export default Pretenders
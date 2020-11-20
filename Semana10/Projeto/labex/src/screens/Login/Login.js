import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/login'

function CriarLogar (){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    const history = useHistory()
        
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            history.push('/Admin/Home')
        }
        console.log('Token:',token)
    },[history])

    const onChangeEmail = (event)=>{
        setEmail(event.target.value)
    }
    const onChangeSenha = (event)=>{
        setSenha(event.target.value)
    }

    const autenticaEmail = ()=>{
        const body={
            email:email,
            password:senha
        }
        axios.post(url,body)
        .then((res)=>{
            localStorage.setItem('token',res.data.token)  
            history.push('/Admin/Home')  
            console.log('Token',res.data.token)                 
        })
        .catch(()=>{
            alert('Email ou Senha inválidos !')            
        })        
    }    

    return(
        <div>
            Login
            <div>
                <div>
                    <h2>Entrar</h2>
                </div>                
                <div>
                    <input placeholder='email' onChange={onChangeEmail} value={email}/>
                    <input placeholder='senha' type='password' onChange={onChangeSenha} value={senha}/>
                </div>
                <div>
                    <button onClick={autenticaEmail}>Iniciar</button>
                </div>
            </div>
        </div>
    )
}

export default CriarLogar
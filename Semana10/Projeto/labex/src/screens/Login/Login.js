import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'
import HomeHeader from '../../components/HeaderHome/HeaderHome'
import { ContainerLogin,FormDados,FormLogin,InputUsuario,InputSenha } from './Styled'
import {BotaoHome} from '../../Botoes/Botoes'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/login'

function CriarLogar (){
    const { form, onChange, resetState} = useForm({
        email:'',        
        senha:'',        
    })
    
    const history = useHistory()
        
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            history.push('/Admin/Home')
        }
        console.log('Token:',token)
    },[history])

    const handleInputChange = (event) =>{
        const {name,value} = event.target
        onChange(name,value)
    }

    const autenticaEmail = (event)=>{
        event.preventDefault()

        const body={
            email:form.email,
            password:form.senha
        }
        console.log(body)
        axios
        .post(url,body)
        .then((res)=>{
            localStorage.setItem('token',res.data.token)  
            history.push('/Admin/Home')                           
        })
        .catch(()=>{
            alert('Email ou Senha inválidos !')            
        })        
        resetState()
    }    

    return(
        <ContainerLogin>
            <HomeHeader/>
            <FormLogin>
                <div>
                    <h2>Entrar</h2>
                </div>                
                <form onSubmit={autenticaEmail}>
                    <FormDados>                        
                        <InputUsuario 
                            id='email'
                            name='email'
                            value={form.email}
                            placeholder='email'
                            type='email'
                            onChange={handleInputChange}                            
                        />
                    </FormDados>
                    <FormDados>                        
                        <InputSenha
                            id='senha' 
                            name='senha'
                            value={form.senha}
                            placeholder='senha' 
                            type='password' 
                            onChange={handleInputChange}                             
                        />
                    </FormDados>
                    <div>
                        <BotaoHome>Iniciar</BotaoHome>
                    </div>                    
                </form>
                
            </FormLogin>
        </ContainerLogin>
    )
}

export default CriarLogar
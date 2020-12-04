import React, { useEffect } from 'react'
import axios from 'axios'
import {useForm} from '../../hooks/useForm'
import {useHistory} from 'react-router-dom'
import { ContainerLogin} from './Styled'
import {InputForms} from '../../components/Inputs/Inputs'
import {FormField} from '../../components/Forms/Forms'
import { ButtonForm } from '../../components/Buttons/Buttons'

function LoginPage (){
    const {form,onChange,resetState}=useForm({
        email:'',
        senha:''
    })
    const history = useHistory()    
    localStorage.setItem('token','')
    const onChangeInput = (event)=>{
        const{name,value}=event.target
        onChange(name,value)
    }
    
    useEffect(()=>{
        const token = localStorage.getItem('token')
        if (token){
            alert('Você já está logado !')
            history.push('/feedpage')
        }        
    },[history])

    const autenticaEmail = (event)=>{
        event.preventDefault()
        const body={
            email:form.email,
            password:form.senha
        }        
        axios
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login`,body)
            .then((res)=>{
                localStorage.setItem('token',res.data.token)
                history.push('/feedpage')
            })
            .catch(()=>{
                alert('Email ou Senha Inválidos !')
            })
        resetState()
    }
    
    return(
        <ContainerLogin>
            <FormField onSubmit={autenticaEmail}>
                <InputForms
                    id='email'
                    name='email'
                    value={form.email}
                    placeholder='email'
                    type='email'
                    onChange={onChangeInput}
                    title='Informe o email cadastrado'
                    required
                />
                <InputForms
                    id='senha'
                    name='senha'
                    value={form.senha}
                    placeholder='senha'
                    type='password'
                    onChange={onChangeInput}
                    title='Informe sua senha'
                    required
                />                
                <ButtonForm>Entrar</ButtonForm>
                
            </FormField>            
        </ContainerLogin>
        
    )
}
export default LoginPage
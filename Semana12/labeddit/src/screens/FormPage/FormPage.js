import axios from 'axios'
import React from 'react'
import { useForm } from '../../hooks/useForm'
import {InputForms} from '../../components/Inputs/Inputs'
import {FormField} from '../../components/Forms/Forms'
import { ContainerFormPage } from './Styled'
import { ButtonForm } from '../../components/Buttons/Buttons'
import { useHistory } from 'react-router-dom'
import {baseUrl} from '../../constants/baseUrl'

function FormPage (){
    const{form,onChange,resetState}=useForm({
        username:'',
        newEmail:'',
        newPassword:''
    })
    const history=useHistory()
    
    const onChangeInput = (event)=>{
        const{name,value}=event.target
        onChange(name,value)
    }

    const submitInput = (event)=>{
        event.preventDefault()
        const body={
            email:form.newEmail,
            username:form.username,
            password:form.newPassword
        }
        axios
            .post(`${baseUrl}/signup`,body)
            .then((res)=>{
                alert('Usuário cadastrado com sucesso !')
                localStorage.setItem('token',res.data.token)
                history.push('/feedpage')
            })
            .catch(()=>{
                alert('Dados inválidos !')
            })
        resetState()
    }
    return(
        <ContainerFormPage>
            <div>
                <h2>É a sua primeira vez no Labeddit ?</h2>
            </div>
            <FormField onSubmit={submitInput}>
                <InputForms
                    id='newEmail'
                    value={form.newEmail}
                    name='newEmail'
                    placeholder='email'
                    onChange={onChangeInput}
                    type='email'
                    title='Informe um email válido'
                    required
                />
                <InputForms
                    id='newPassword'
                    value={form.newPassword}
                    name='newPassword'
                    placeholder='senha'
                    onChange={onChangeInput}
                    type='password'
                    title='Informe uma senha válida'
                    required
                />
                <InputForms
                    id='username'
                    value={form.username}
                    name='username'
                    placeholder='nome de usuário'
                    onChange={onChangeInput}
                    type='text'
                    title='Informe um nome de usuário válido'
                    required
                />
                <ButtonForm>Criar Usuário</ButtonForm>
            </FormField>
        </ContainerFormPage>
    )
}
export default FormPage
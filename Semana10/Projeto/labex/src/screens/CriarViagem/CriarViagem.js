import React from 'react'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'

const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips'
const headers={
    headers:{
        auth:localStorage.getItem('token')
    }
}

function CriarViagem () {
    const{form,onChange,resetState}=useForm({
        nome:'',
        planeta:'',    
        data:'',
        duracao:0,
        descricao:''
    })

    const handleSubmittion = (event)=>{
        event.preventDefault()        

        const body = {
            name:form.nome,
            planet:form.planeta,
            date:form.data,
            description:form.descricao,
            durationInDays:Number(form.duracao)
        }
        axios
            .post(url,body,headers)
            .then(()=>{
                alert('Viagem cadastrada com sucesso!')
            })
            .catch(()=>{
                alert('Revise os dados a serem cadastrados !')
            })
        
        resetState()
    }
    const handleInputChange = (event)=>{
        const {name,value}=event.target
        onChange(name,value)
    }

    return (
        <div>
            <div>
                <h1>Agende um novo destino</h1>
            </div>
            <div>
                <form onSubmit={handleSubmittion}>
                    <div>
                        <label for='viagem'>Nome da jornada</label>
                        <input 
                        id='viagem'
                        value={form.nome}
                        name='nome'
                        placeholder='Viagem'
                        onChange={handleInputChange}
                        type='text'
                        pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{3,}'
                        title='Informe o nome da viagem'
                        required
                        />
                    </div>
                    <div>
                        <label for='planetas'>Destino</label>
                        <input
                            id='planetas'
                            value={form.planeta}
                            name='planeta'
                            placeholder='Planeta'
                            onChange={handleInputChange}
                            type='text'
                            pattern='[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{3,}'
                            title='Informe o Planeta'
                            required
                        />                        
                    </div>
                    <div>
                        <label for='data'>Data da partida</label>
                        <input
                            id='data'
                            value={form.data}
                            name='data'              
                            onChange={handleInputChange}
                            type='date'
                            min=''
                            title='Informe uma data válida'
                            required
                        />
                    </div>
                    <div>
                        <label for='duracao'>Duração</label>
                        <input
                            id='duracao'
                            name='duracao'
                            value={form.duracao}
                            onChange={handleInputChange}
                            type='Number'
                            min='0'
                            title='Informe a duração da viagem em dias'
                            required
                        />
                    </div>
                    <div>
                        <label for='descricao'>Descrição da jornada</label>
                        <textarea
                            id='descricao'
                            name='descricao'
                            placeholder='Descrição da viagem'
                            value={form.descricao}
                            onChange={handleInputChange}
                            title='Informe a descrição da viagem'
                            required
                        />
                    </div>
                    <div>
                        <button>Finalizar</button>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default CriarViagem
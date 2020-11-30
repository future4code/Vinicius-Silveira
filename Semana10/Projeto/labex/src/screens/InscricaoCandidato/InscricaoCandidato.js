import React, { useState,useEffect } from 'react'
import {useForm} from '../../hooks/useForm'
import axios from 'axios'
import HeaderHome from '../../components/HeaderHome/HeaderHome'
import {BotaoHome} from '../../Botoes/Botoes'
import {Container,TituloBemVindo,DivFormulario,NomeTripulante,FormIdadeProfissao, Profissao,Idade,SelectDados, FormCamposDados, MotivoTripulante, DireitaFormulario} from './Styled'


const urlViagens = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips'
const urlPaises = 'https://restcountries.eu/rest/v2/all'

function InscricaoCandidato (){
    const { form, onChange, resetState} = useForm({
        nome:'',
        idade:0,
        profissao:'',
        pais:'',
        motivo:'',
        viagem:''
    })
    
    const [pais,setPais] =useState([])
    const [viagem,setViagem]=useState(undefined)
    
    const handleInputChange = (event) =>{
        const {name,value} = event.target
        onChange(name,value)
    }

    const handleSubmittion = (event) =>{
        event.preventDefault();        

        const body={
            name:form.nome,
            age:Number(form.idade),
            applicationText:form.motivo,
            profession:form.profissao,
            country:form.pais
        }        
        axios   
            .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vinicius-dumont/trips/${form.viagem}/apply`,body)
            .then(()=>{
                alert('Astronauta aplicado a viagem com sucesso, aguardar aprovação !')
            })
            .catch(()=>{
                alert('Astronauta não aplicado, por favor revise seus dados !')
            })
        resetState()
        
    }
    useEffect(()=>{        
        axios
            .get(urlPaises)
            .then((res)=>{            
                setPais(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })            
        axios
            .get(urlViagens)              
            .then((res) => {
                setViagem(res.data.trips)            
            })
            .catch((err) => {
                console.log(err);
            });                 
    },[])
    
    const listaPaises = pais.map((paises)=>{
        return(            
            <option key={paises.id}>{paises.name}</option>            
        )
    })
    return(
        <Container>
            <HeaderHome/>
            <div>
                <TituloBemVindo>Seja bem-vindo astronauta</TituloBemVindo>
            </div>            
            <form onSubmit={handleSubmittion}>
                <DivFormulario>
                    <div>
                        <FormCamposDados>
                            <label for='nome'>Nome do tripulante </label>
                            <NomeTripulante
                                id='nome'
                                value={form.nome}
                                name='nome'
                                placeholder='Nome'
                                onChange={handleInputChange}
                                type='text'
                                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{3,}"
                                title='Informe ao menos 3 letras'
                                required
                            />
                        </FormCamposDados>  

                        <FormIdadeProfissao>                    
                            <FormCamposDados>
                                <label for='idade'>Idade </label>
                                <Idade
                                    id='idade'
                                    value={form.idade}
                                    name='idade'
                                    onChange={handleInputChange}
                                    type='number'
                                    min='18'
                                    title='Idade a partir de 18 anos'
                                    required
                                />
                            </FormCamposDados>   

                            <FormCamposDados>
                                <label for='profissao'>Profissão </label>
                                <Profissao
                                    id='profissao'
                                    value={form.profissao}
                                    name='profissao'
                                    placeholder='Profissão'
                                    onChange={handleInputChange}
                                    type='text'
                                    pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{4,}"
                                    title='Informe ao menos 4 caracteres'
                                    required
                                />
                            </FormCamposDados>  
                        </FormIdadeProfissao> 

                        <FormCamposDados>
                            <label>Selecione sua aventura</label>
                            <SelectDados name='viagem' value={form.viagem} onChange={handleInputChange} required>
                                <option value=''>-</option>
                                {viagem && viagem.map((viagens)=>{
                                return(
                                    <option key={viagens.id} value={viagens.id}>{viagens.name}</option>                                    
                                )
                                })} 
                            </SelectDados>
                        </FormCamposDados>
                        <FormCamposDados>
                            <label for='motivo'>Por que você é um bom tripulante ?</label>
                            <MotivoTripulante
                                id='motivo'
                                value={form.motivo}
                                name='motivo'
                                onChange={handleInputChange}
                                pattern="[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ,.?! ]{30,}"
                                title='Informe um bom motivo com no mínimo 30 letras'
                                required
                            />
                        </FormCamposDados>  
                    </div>

                    <DireitaFormulario>
                        <FormCamposDados>        
                            <label>Selecione seu País</label>                
                            <SelectDados name="pais" value={form.pais} onChange={handleInputChange} required>
                                <option value=''> - </option>
                                {listaPaises}
                            </SelectDados>
                        </FormCamposDados>
                        <div>
                            <BotaoHome>Enviar</BotaoHome>    
                        </div>                        
                    </DireitaFormulario>
                </DivFormulario>        
            </form>            
        </Container>

    )
}
export default InscricaoCandidato
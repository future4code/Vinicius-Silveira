import React from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin'
import {ContainerAdmin, DivBotoes, DivTextoBotao} from './Styled'
import {BotaoHome} from '../../Botoes/Botoes'

function HomeAdmin (){        
    const history=useHistory()
    
    useProtectedPage()

    const logOut = ()=>{
        localStorage.removeItem('token')        
        history.push('/')
    }
    
    const goToCriarViagem = ()=>{
        history.push('/Admin/Home/CriarViagem')
    }
    
    const goToListaViagens =()=>{
        history.push('/Admin/Home/ListaViagens')
    }
    return(
        <ContainerAdmin>
            <HeaderAdmin/>
            <div>
                <h1>Seja bem-vindo comandante</h1>
            </div>
            <DivTextoBotao>
                <div>
                    <h2>Administre aqui viagens futuras</h2>
                </div>
                <DivBotoes>
                    <div>
                        <BotaoHome onClick={goToCriarViagem}>Criar</BotaoHome>
                    </div>
                    <div>
                        <BotaoHome onClick={goToListaViagens}>Listar</BotaoHome>
                    </div>                                                               
                </DivBotoes>                
            </DivTextoBotao>
        </ContainerAdmin>
    )
}
export default HomeAdmin
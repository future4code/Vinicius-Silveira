import React from 'react'
import Logo from '../../assets/Logo2.png'
import {DivContainter, LogoLabex,DivLogo,Conteudo,Titulo,SubTitulo} from './Styled'
import {useHistory} from 'react-router-dom'
import {BotaoHome} from '../../Botoes/Botoes'
function HomePage (){    
    const history = useHistory()

    const goToLogin = ()=>{
        history.push('/Login')
    }
    const goToInscricao = ()=>{
        history.push('/Inscricao')
    }
    return(
        <DivContainter>            
            <DivLogo>
                <LogoLabex src={Logo}/>
            </DivLogo>    
            <Conteudo>            
                <div>
                    <Titulo>O futuro começa aqui </Titulo>
                </div>
                <div>
                    <SubTitulo>Venha desbravar o universo conosco !</SubTitulo>
                </div>
                <div>
                    <BotaoHome onClick={goToLogin}>Administrador</BotaoHome>
                    <BotaoHome onClick={goToInscricao}>Candidatar-se</BotaoHome>
                </div>
            </Conteudo>
        </DivContainter>
    )
}

export default HomePage
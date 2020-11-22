import React from 'react'
import Logo from '../../assets/Logo2.png'
import {useHistory} from 'react-router-dom'
import {LogoCabecalhoHome,Container,DivTitulo,DivSair} from './Styled'

function HeaderAdmin  (){
    const history = useHistory()

    const logOut = ()=>{
        localStorage.removeItem('token')
        history.push('/')
    }

    return(
        <Container>
            <div>
                <LogoCabecalhoHome src={Logo}/>
            </div>
            <DivTitulo>
                <h2>O Futuro Começa Aqui</h2>
            </DivTitulo>            
            <DivSair>
                <p onClick={logOut}>Sair</p>               
            </DivSair>
        </Container>
    )
}
export default HeaderAdmin
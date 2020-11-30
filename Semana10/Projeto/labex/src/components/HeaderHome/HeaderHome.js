import React from 'react'
import Logo from '../../assets/Logo2.png'
import {LogoCabecalhoHome,Container,DivTitulo} from './Styled'

function HeaderHome  (){
    return(
        <Container>
            <div>
                <LogoCabecalhoHome src={Logo}/>
            </div>
            <DivTitulo>
                <h2>O Futuro Começa Aqui</h2>
            </DivTitulo>            
        </Container>
    )
}
export default HeaderHome
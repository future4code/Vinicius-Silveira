import React from 'react'
import {Container} from './Styled'
import Logo from '../../assets/logo-header.png'
function Header (){
    return(
        <Container>
            <img src={Logo} alt='logo'/>
        </Container>
    )
}
export default Header
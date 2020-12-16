import React from 'react'
import {Container, LogoLabeedit, LogoutIcon} from './Styled'
import Logo from '../../assets/logo-header.png'
import Logout from '../../assets/sair.png'
import { useHistory } from 'react-router-dom'
function Header (){
    const history=useHistory()
    const logOut = ()=>{
        localStorage.removeItem('token')
        history.push('/')
    }
    return(
        <Container>
            <LogoLabeedit src={Logo} alt='logo'/>
            <LogoutIcon src={Logout} alt='logout' onClick={logOut}/>
        </Container>
    )
}
export default Header
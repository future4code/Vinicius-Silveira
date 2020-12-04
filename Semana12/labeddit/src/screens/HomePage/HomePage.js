import React from 'react'
import LoginPage from '../LoginPage/LoginPage'
import FormPage from '../FormPage/FormPage'
import {ContainerHomePage} from './Styled'
import Logo from '../../assets/logo-home.png'
function HomePage (){
    return(
        <ContainerHomePage>            
            <div>
                <div>
                    <img src={Logo}/>
                </div>                
                <div>
                    <h4>O Labeddit ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida.</h4>
                </div>                  
            </div>
            <div>
                <LoginPage/>                        
                <FormPage/>
            </div>            
        </ContainerHomePage>       
    )
}

export default HomePage
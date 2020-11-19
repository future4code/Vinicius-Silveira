import React from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import {useHistory} from 'react-router-dom'

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
        <div>
            <div>
                <h1>Seja bem-vindo comandante</h1>
            </div>
            <div>
                <div>
                    <h2>Administre aqui viagens futuras</h2>
                </div>
                <div>
                    <button onClick={goToCriarViagem}>Criar</button>
                </div>
                <div>
                    <button onClick={goToListaViagens}>Listar</button>
                </div>               
                <div>
                    <button onClick={logOut}>Sair</button>
                </div> 
                
                
            </div>
        </div>
    )
}
export default HomeAdmin
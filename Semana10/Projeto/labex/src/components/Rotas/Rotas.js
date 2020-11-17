import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from '../../screens/HomePage/HomePage'
import CriarViagem from '../../screens/CriarViagem/CriarViagem'
import DetalhesViagem from '../../screens/DetalheViagens/DetalheViagens'
import FormularioInscricaoUsuario from '../../screens/FormularioInscricaoUsuario/FormularioInscricaoUsuario'
import HomeAdmin from '../../screens/HomeAdmin/HomeAdmin'
import ListaUsuarios from '../../screens/ListaUsuarios/ListaUsuarios'
import ListaViagens from '../../screens/ListaViagens/ListaViagens'
import Login from '../../screens/Login/Login'

function Rotas (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/Home'>
                    <HomePage/>
                </Route>
                <Route exact path='/Admin/CriarViagem'>
                    <CriarViagem/>                    
                </Route>
                <Route exact path='/Admin/DetalhesViagem'>
                    <DetalhesViagem/>
                </Route>
                <Route exact path='/Inscricao'>
                    <FormularioInscricaoUsuario/>
                </Route>
                <Route exact path='/Admin/Home'>
                    <HomeAdmin/>
                </Route>
                <Route exact path='/Admin/ListaUsuarios'>
                    <ListaUsuarios/>
                </Route>
                <Route exact path='/Admin/ListaViagens'>
                    <ListaViagens/>
                </Route>
                <Route exact path='/Login'>
                    <Login/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Rotas
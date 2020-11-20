import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage'
import CriarViagem from '../screens/CriarViagem/CriarViagem'
import DetalhesViagem from '../screens/DetalheViagens/DetalheViagens'
import InscricaoCandidato from '../screens/InscricaoCandidato/InscricaoCandidato'
import HomeAdmin from '../screens/HomeAdmin/HomeAdmin'
import ListaUsuarios from '../screens/ListaUsuarios/ListaUsuarios'
import ListaViagens from '../screens/ListaViagens/ListaViagens'
import Login from '../screens/Login/Login'

function Rotas (){
    return(        
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>                    
                    <HomePage/>
                </Route>
                <Route exact path='/Admin/Home/CriarViagem'>
                    <CriarViagem/>                    
                </Route>
                <Route exact path='/Admin/Home/ListaViagens/DetalhesViagem/:idViagem'>
                    <DetalhesViagem/>
                </Route>
                <Route exact path='/Inscricao'>
                    <InscricaoCandidato/>
                </Route>
                <Route exact path='/Admin/Home'>
                    <HomeAdmin/>
                </Route>
                <Route exact path='/Admin/ListaUsuarios'>
                    <ListaUsuarios/>
                </Route>
                <Route exact path='/Admin/Home/ListaViagens'>
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
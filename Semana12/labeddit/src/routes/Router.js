import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import LoginPage from '../screens/LoginPage/LoginPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import FormPage from '../screens/FormPage/FormPage'
import PostPage from '../screens/PostPage/PostPage'

function Router (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <LoginPage/>
                </Route>
                <Route exact path='/feedpage'>
                    <FeedPage/>
                </Route>
                <Route exact path='/formpage'>
                    <FormPage/>
                </Route>
                <Route exact path='/feedpage/postpage'>
                    <PostPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
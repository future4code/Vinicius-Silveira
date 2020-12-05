import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import FeedPage from '../screens/FeedPage/FeedPage'
import PostPage from '../screens/PostPage/PostPage'
import HomePage from '../screens/HomePage/HomePage'

function Router (props){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/feedpage'>
                    <FeedPage/>
                </Route>                
                <Route exact path='/feedpage/postpage/:postId'>
                    <PostPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router
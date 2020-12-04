import React from 'react'
import {useHistory} from 'react-router-dom'
import axio from 'axios'

function PostCard (props){
    const history=useHistory()
    
    return(
        <div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.text}</p>
            </div>
        </div>     
    )
}

export default PostCard
import React, { useEffect, useState } from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'
import { useRequestData } from '../../hooks/useRequestData'
import axios from 'axios'
const url='https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts'
const headers= {
    headers:{
        Authorization:localStorage.getItem('token')
    }
}

function FeedPage (){    
    const [posts,setPosts]=useState()
    useProtectedPage()

    useEffect(()=>{
        axios.get(url,headers)
        .then((res)=>{
            setPosts(res.data.posts)
            console.log(res.data.posts)
        })
        .catch((err)=>{
            alert(err.message)
        })
    },[url])

    /*console.log('Posts:',getPosts)
    const postList = getPosts && getPosts.map((post)=>{
        return(
            <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                text={post.title}
                username={post.username}
                votesCount={post.votesCount}
                userVoteDirection={post.userVoteDirection}
                comentsCount={post.commentCount}
            />
        )
    })*/
    return(
        <div>
            {posts && posts.map((post)=>{
                return(
                    <PostCard
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        text={post.text}
                        username={post.username}
                        votesCount={post.votesCount}
                        userVoteDirection={post.userVoteDirection}
                        comentsCount={post.commentCount}
                    />
                )
            })}
        </div>
    )
}
export default FeedPage
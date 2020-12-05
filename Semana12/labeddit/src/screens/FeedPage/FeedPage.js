import React, { useEffect, useState } from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {baseUrl} from '../../constants/baseUrl'
import {headers} from '../../constants/headers'
import { ContainerCard } from './Styled'

function FeedPage (){    
    const [posts,setPosts]=useState([])
    const [load,setLoad]=useState(false)

    useProtectedPage()

    const renderPosts = ()=>{
        setLoad(true)
        axios.get(`${baseUrl}/posts`,headers)
        .then((res)=>{
            setPosts(res.data.posts)
            console.log(res.data.posts)
            setLoad(false)
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
    useEffect(()=>{
       renderPosts()
    },[])
    
    const voteComment = (postId,direction)=>{
        const body={
            direction:direction
        }        
        axios.put(`${baseUrl}/posts/${postId}/vote`,body,headers) 
        .then(()=>{
            renderPosts()
        })
        .catch(()=>{
            alert('Erro na votação, tente novamente !')
        })        
    }
    return(
        <ContainerCard>
            <Header/>
            {load && <progress/>}
            {posts && posts.map((post)=>{
                return(
                    <PostCard
                        key={post.id}
                        post={post}
                        hideCommentButton={false}
                        voteComment={voteComment}
                    />
                )
            })}
        </ContainerCard>
    )
}
export default FeedPage
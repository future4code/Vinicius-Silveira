import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/baseUrl'
import {headers} from '../../constants/headers'
import PostCard from '../../components/PostCard/PostCard'
import up from '../../assets/arrow-up.png'
import down from '../../assets/arrow-down.png'

function PostPage (){
    const [post,setPost]=useState(null)
    const {form,onChange,resetState}=useForm({
        comment:'',        
    })
    const params = useParams()
    const history = useHistory()
    
    const renderPosts = ()=>{
        axios.get(`${baseUrl}/posts/${params.postId}`,headers)
        .then((res)=>{
            setPost(res.data.post)
        })
    }

    useEffect(()=>{
        if(!params.postId){
            history.push('/feedpage')
        }
    },[])
    
    useEffect(()=>{
        renderPosts()
    },[])

    const onChangeInput = (event)=>{
        const{name,value}=event.target
        onChange(name,value)
    }

    const submitInput = (event)=>{
        event.preventDefault()
        const body={
            text:form.comment            
        }
        axios
            .post(`${baseUrl}/posts/${params.postId}/comment`,body,headers)
            .then(()=>{
                alert('Comentário cadastrado com sucesso !')     
                renderPosts()                           
            })
            .catch(()=>{
                alert('Não foi possível cadastrar a mensagem')
            })
        resetState()
    }

    const voteComment = (commentId,direction)=>{
        const body={
            direction:direction
        }        
        axios.put(`${baseUrl}/posts/${params.postId}/comment/${commentId}/vote`,body,headers) 
        .then(()=>{
            renderPosts()
        })
        .catch(()=>{
            alert('Erro na votação, tente novamente !')
        })        
    }

    return(
        <div>
            {post !==null && <PostCard post={post} hideCommentButton={true}/>}
            <form onSubmit={submitInput}>
                <input
                    id='comment'
                    name='comment'
                    placeholder='Digite seu comentário'
                    value={form.comment}
                    onChange={onChangeInput}
                    required
                />
                <button>Enviar Comentário</button>
            </form>
            {post && post.comments.map((comment)=>{
                return(
                    <div key={comment.id}>         
                        <div>                                       
                            <h3>{comment.username}</h3>
                            <p>{comment.text}</p>
                        </div>
                        <div>
                            <img src={up} onClick={()=>voteComment(comment.id,1)}/>                    
                            <h4>{comment.votesCount}</h4>                    
                            <img src={down} onClick={()=>voteComment(comment.id,-1)}/> 
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default PostPage
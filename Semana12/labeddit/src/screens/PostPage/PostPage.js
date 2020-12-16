import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { baseUrl } from '../../constants/baseUrl'
import {headers} from '../../constants/headers'
import PostCard from '../../components/PostCard/PostCard'
import up from '../../assets/arrow-up.png'
import down from '../../assets/arrow-down.png'
import Header from '../../components/Header/Header'
import { ContainerCard } from '../FeedPage/Styled'
import {ProgressBar} from '../../components/ProgressBar/ProgressBar'
import { FormField } from '../../components/Forms/Forms'
import { ButtonForm } from '../../components/Buttons/Buttons'
import { ArrowIcon, Card, TitleUsername, VoteArrowCount } from '../../components/PostCard/Styled'
import { InputForms } from '../../components/Inputs/Inputs'

function PostPage (){
    const [post,setPost]=useState(null)
    const {form,onChange,resetState}=useForm({
        comment:'',        
    })
    const [load,setLoad]=useState(false)
    const params = useParams()
    const history = useHistory()
    
    const renderPosts = ()=>{
        setLoad(true)
        axios.get(`${baseUrl}/posts/${params.postId}`,headers)
        .then((res)=>{
            setPost(res.data.post)
            setLoad(false)
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
            <Header/>
            <ContainerCard>
                <div>
                    {load && <ProgressBar/>}
                </div>
                {post !==null && <PostCard post={post} hideCommentButton={true}/>}
                <Card>
                    <FormField onSubmit={submitInput}>
                        <InputForms
                            id='comment'
                            name='comment'
                            placeholder='Digite seu comentário'
                            value={form.comment}
                            onChange={onChangeInput}
                            required
                        />
                        <ButtonForm>Enviar Comentário</ButtonForm>
                    </FormField>
                </Card>
            </ContainerCard>                                  
            {post && post.comments.map((comment)=>{
                return(
                    <Card key={comment.id}>         
                        <TitleUsername>                                       
                            <h3>{comment.username}</h3>
                            <p>{comment.text}</p>
                        </TitleUsername>
                        <VoteArrowCount>
                            <ArrowIcon src={up} onClick={()=>voteComment(comment.id,1)}/>                    
                            <h4>{comment.votesCount}</h4>                    
                            <ArrowIcon src={down} onClick={()=>voteComment(comment.id,-1)}/> 
                        </VoteArrowCount>
                    </Card>
                )
            })}            
        </div>
    )
}
export default PostPage
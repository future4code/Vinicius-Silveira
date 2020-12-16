import React, { useEffect, useState } from 'react'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import PostCard from '../../components/PostCard/PostCard'
import Header from '../../components/Header/Header'
import axios from 'axios'
import {baseUrl} from '../../constants/baseUrl'
import {headers} from '../../constants/headers'
import { ContainerCard} from './Styled'
import {ProgressBar} from '../../components/ProgressBar/ProgressBar'
import { useForm } from '../../hooks/useForm'
import { InputForms } from '../../components/Inputs/Inputs'
import { Card } from '../../components/PostCard/Styled'
import { FormField } from '../../components/Forms/Forms'
import { ButtonForm } from '../../components/Buttons/Buttons'

function FeedPage (){    
    const [posts,setPosts]=useState([])
    const [load,setLoad]=useState(false)
    const {form,onChange,resetState}=useForm({
        postTitle:'',
        postText:''
    })
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

    const onChangeInput=(event)=>{
        const{name,value}=event.target
        onChange(name,value)
    }
    const submitPost = (event)=>{
        event.preventDefault()
        const body={
            text:form.postText,
            title:form.postTitle            
        }
        axios.post(`${baseUrl}/posts`,body,headers)
        .then(()=>{
            alert('Post criado com sucesso !')
            renderPosts()
        })
        .catch(()=>{
            alert('Não foi possível criar o post, revise os dados')
        })
        resetState()
    }
    return(
        <div>
            <Header/>
            <ContainerCard>
                <div>
                    {load && <ProgressBar/>}
                </div>
                <Card>
                    <FormField onSubmit={submitPost}>
                        <InputForms
                            id='postTitle'
                            name='postTitle'
                            placeholder='Título do Post'
                            value={form.postTitle}
                            title='Informe um título'
                            onChange={onChangeInput}
                            required
                        />
                        <InputForms
                            id='postText'
                            name='postText'
                            placeholder='Texto do Post'
                            value={form.postText}
                            title='Informe o conteúdo do Post'
                            onChange={onChangeInput}
                            required
                        />
                        <ButtonForm>Criar Post</ButtonForm>
                    </FormField>
                </Card>                
            </ContainerCard>
            
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
        </div>
    )
}
export default FeedPage
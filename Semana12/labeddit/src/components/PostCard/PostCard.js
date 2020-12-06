import React from 'react'
import { ArrowIcon, Card, MessageIcon, PostAssignments, TitleUsername, VoteArrowCount } from './Styled'
import up from '../../assets/arrow-up.png'
import down from '../../assets/arrow-down.png'
import Message from '../../assets/chat.png'
import { useHistory } from 'react-router-dom'

function PostCard (props){
    const history = useHistory()

    const goToPostPage = ()=>{
        history.push(`/feedpage/postpage/${props.post.id}`)
    }
    const renderButtonMessage = ()=>{
        if(!props.hideCommentButton){
            return(
                <div>
                    <MessageIcon src={Message} alt='Chat' onClick={goToPostPage}/>
                </div>   
            )
        }
    }
    const upVote = ()=>{
        props.voteComment(props.post.id,1)
    }
    const downVote = ()=>{
        props.voteComment(props.post.id,-1)
    }
    return(
        <div>
            <Card>            
                <TitleUsername>
                    <h3>{props.post.title}</h3>
                    <p><em><strong>{props.post.username}</strong></em></p>
                </TitleUsername>            
                <div>
                    <p>{props.post.text}</p>
                </div>
                <PostAssignments>
                    <VoteArrowCount>                    
                        <ArrowIcon src={up} onClick={upVote}/>                    
                        <h3>{props.post.votesCount}</h3>                    
                        <ArrowIcon src={down} onClick={downVote}/>
                    </VoteArrowCount>
                    {renderButtonMessage()}    
                </PostAssignments>                
            </Card>
        </div>     
    )
}

export default PostCard
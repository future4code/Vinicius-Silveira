import styled from 'styled-components'

export const Card = styled.div`
    border:1px solid red;
    margin:10px auto;
    background-color:#fff;
    border-radius:5px;    
    max-width:30vw;
`
export const TitleUsername=styled.div`
    h3{
        border:1px solid red;
        text-align:center;
    }
    p{
        border:1px solid red;
    }
`
export const ArrowIcon=styled.img`
    width:20px;
    height:20px;
    padding:5px;
    margin:5px;
    border-radius:5px;
    &:hover{
        cursor:pointer;        
        background-color:#EDEEF0;
    }
`
export const MessageIcon=styled.img`
    width:30px;
    height:30px;
    padding-right:10px;
    &:hover{
        cursor:pointer;
        width:35px;
        height:35px;
    }
`
export const PostAssignments = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`
export const VoteArrowCount=styled.div`
    display:flex;
    align-items:center;    
`
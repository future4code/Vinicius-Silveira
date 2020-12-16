import styled from 'styled-components'

export const Card = styled.div`    
    margin:10px auto;    
    background-color:#fff;
    border-radius:10px;    
    max-width:30vw;    
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    p{
        padding:5px;
    } 
`
export const TitleUsername=styled.div`
    h3{        
        text-align:center;
        padding:0 5px;
    }
    p{
        margin-top:-20px;
        padding-left:10px;
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
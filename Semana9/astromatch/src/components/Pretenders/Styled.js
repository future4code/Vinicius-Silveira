import styled from 'styled-components'
export const ImgProfile = styled.img`
    width:25vw;
    height:55vh;
    border:1px solid black;
    border-radius:10px;      
    margin:10px auto;   
    position:relative;    
`
export const DivContainer = styled.div `    
    display:flex;
    flex-direction:column;            
`
export const AlignImgBio = styled.div `
    display:flex;    
    align-items:center;
`
export const DivContentProfile = styled.div`  
    display:flex;      
    margin-left:3vw;
    width:25vw;  
    position:absolute;  
    text-shadow: 0 0 10px black;
    margin-top:-18vh;    
    color:white;
`
export const BioProfile = styled.p `    
    position:absolute;    
    width:24vw;
    text-shadow: 0 0 10px black;
    margin-top:-10vh;
    margin-left:3vw;
    color:white;
    font-weight:bolder;
`
export const IconMatchProfile = styled.img `
  width:4vw;
  height:8vh;
  cursor: pointer;    
  &:hover{
    width:3.5vw;
    height:7.5vh;
  }
`
export const DivLikeDislike = styled.div `
    display:grid;    
    grid-template-columns:1fr 1fr;    
    justify-items:center;
`
export const DivRefreshMatches = styled.div `
    margin:0 auto;
`
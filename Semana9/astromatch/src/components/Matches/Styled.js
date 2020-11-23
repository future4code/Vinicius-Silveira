import styled from 'styled-components'

export const DivContainer = styled.div`  
    display:flex;  
    flex-direction:column;     
`
export const DivListMatches = styled.div `
    display:flex;    
    background-image:linear-gradient(to right, rgba(100,195,125,0.1),rgba(164,226,118,0.7));
    border-radius:5px;
    padding:1vw;    
    margin:0.4vw;
    color:white;
    text-shadow: 0 0 1vw black;    
    cursor:default;
    h3{
        padding-left:1vw;
    }
`
export const DivHeightMatches = styled.div `
    overflow-y:scroll;
    height:60vh;   
`
export const DivRefreshMatches = styled.div `    
    display:flex;    
    justify-content:center;
    margin-top:7vh;
`
export const ImgMatches = styled.img `
    width:5vw;
    height:9vh;
    border-radius:100%;    
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
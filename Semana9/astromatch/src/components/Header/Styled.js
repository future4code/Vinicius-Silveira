import styled from 'styled-components'
export const DivContainer = styled.div `
  background-color:#D0D0D0;
  width:100vw;
  height:100vh;    
  padding:20px;
`
export const DivHeaderProfile = styled.div `
  display:grid;
  grid-template-columns:30vw 5vw;
  justify-items:center;
  border-bottom:1px solid #d0d0d0;  
`
export const DivHeaderMatches = styled.div `
  display:grid;
  grid-template-columns:5vw 20vw;
  justify-items:center;
  border-bottom:1px solid #d0d0d0;  
`
export const DivProfilesMatches = styled.div`
    border:1px solid black;
    border-radius:1vw;
    background-color: white;
    width:30vw;
    height:90vh;    
    margin:0 auto;    
`
export const ColorTitleMatch = styled.h1 `
  color:#A4E276;
  cursor:default;  
`
export const ColorTitleAstro = styled.span`
  color:#64C37D;
`
export const IconMatchProfile = styled.img `
  width:3vw;
  height:6vh;
  cursor: pointer;  
  &:hover{
    width:2.5vw;
    height:5.5vh;
  }
`
export const DivIconMatch = styled.div `
  display:flex;
  align-items:center;    
  margin-right:10vw;
`
export const DivIconProfile = styled.div`
  display:flex;
  align-items:center;  
`
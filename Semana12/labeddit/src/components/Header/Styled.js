import styled from 'styled-components'

export const Container = styled.div`
    width:98.7vw;
    height:10vh;            
    background-color:#4A76A8;
    color:#fff;    
    display:flex;
    justify-content:space-between;
    align-items:center;    
    box-shadow: 0px 13px 6px -5px rgba(0,0,0,0.75);
    position:fixed;
    top:0;    
`
export const LogoLabeedit =styled.img`
    width:20vw;
    height:10vh;
    margin-left:1vw;
`
export const LogoutIcon = styled.img`
    width:3vw;
    height:5vh;
    margin-right:2vw;
    &:hover{
        cursor:pointer;
        width:3vw;
        height:6vh;
    }
` 
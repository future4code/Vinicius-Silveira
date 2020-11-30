import styled from 'styled-components'

export const BotaoHome=styled.button`    
    border:2px solid white;
    background:rgba(255,255,255,0.1);
    margin:0 4vw;
    width:15vw;
    height:10vh;
    color:#fff;
    font-size:1.5vw;
    font-weight:bold;
    text-shadow:0 0 10px #000;
    border-radius:5px;
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    &:hover {
        box-shadow: 0 0 40px 40px white inset;
        border:1px solid #000;
        color:#000;
        cursor:pointer;
    }
`

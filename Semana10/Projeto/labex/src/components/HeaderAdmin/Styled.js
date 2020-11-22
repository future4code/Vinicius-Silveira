import styled from 'styled-components'

export const LogoCabecalhoHome = styled.img `
    width:20vw;
    height:7vh;
    margin-top:5px;
`
export const Container = styled.div`
    display:flex;    
    padding:10px;
    justify-content:space-between;
    background-color: rgba(0,0,0,0.4);
    border-bottom: 2px solid rgba(255,255,255,0.4);     
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    font-family: 'Bebas Neue', cursive;   
`
export const DivTitulo = styled.div`
    display:flex;    
    margin-right:20vw;    
`
export const DivSair = styled.div`    
    font-size:1.5em;
    cursor:pointer;    
    p:hover{        
        border-bottom:1px solid #fff;                
    }
`
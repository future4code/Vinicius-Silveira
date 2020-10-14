import React from 'react'
import './CardPequeno.css'

function CardPequeno(props){
    return(        
        <div className="smallcard-container">
            <img src={props.imagem}/>
            <div>
                <p><strong>{props.dado}</strong>{props.texto}</p>                     
            </div>
        </div>
    )   
}
export default CardPequeno
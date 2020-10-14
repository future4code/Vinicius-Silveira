import React from 'react'
import './Competencias.css'

function Competencias(props){
    return(
        <div className="competencia-container">
            <div>
                <h4>{props.nome1}</h4>
                <p>{props.descricao1}</p>
                
                <hr/>
                <h4>{props.nome2}</h4>
                <p>{props.descricao2}</p>

                <hr/>
                <h4>{props.nome3}</h4>
                <p>{props.descricao3}</p>

                <hr/>
            </div>
        </div>
    )
}

export default Competencias
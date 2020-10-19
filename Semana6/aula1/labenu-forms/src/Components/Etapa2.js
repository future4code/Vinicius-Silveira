//----------COMPONENTE COM A SEGUNDA PARTE DO FORMULÁRIO
import React from 'react'

class InfoSuperior extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 2 - Informações Do Ensino Superior</h1>
                <h3>5. Qual curso?</h3>
                <input type="text" placeholder="curso"></input>
                <h3>6. Qual unidade de ensino ? </h3>
                <input type="text" placeholder="unidade"></input>
            </div>
        )
    };
}

export default InfoSuperior;

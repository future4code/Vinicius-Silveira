//----------COMPONENTE COM A TERCEIRA PARTE DO FORMULÁRIO
import React from 'react'

class InfoGeraisEnsino extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 3 - Informações Gerais de Ensino</h1>
                <h3>5. Por que você não terminou um  urso de graduação ?</h3>
                <textarea></textarea>
                <h3>6. Você fez algum curso complementar ?</h3>
                <select>
                    <option value="nenhum">Nenhum</option>
                </select>
            </div>
        )
    } ;
}

export default InfoGeraisEnsino
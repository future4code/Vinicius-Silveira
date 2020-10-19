//----------COMPONENTE COM A PRIMEIRA PARTE DO FORMULÁRIO
import React from 'react';

class DadosGerais extends React.Component{
    render(){
        return(
            <div>
                <h1>Etapa 1 - Dados Gerais</h1>
                <h3>1. Qual o seu nome ?</h3>
                <input type="text" placeholder="Nome"></input>
                <h3>2. Qual sua idade ?</h3>
                <input type="text" placeholder="idade"></input>
                <h3>3. Qual seu email ?</h3>
                <input type ="text" placeholder="email"></input>
                <h3>4. Qual sua escolaridade ?</h3>
                <select>
                    <option value="fundamental">Ensino Fundamental</option>
                    <option value="medioIncompleto">Ensino Médio incompleto</option>
                    <option value="medioCompleto">Ensino Médio Completo</option>
                    <option value="superiorIncompleto">Ensino Superior Incompleto</option>
                    <option value="superiorCompleto">Ensino Superio Completo</option>
                </select>
            </div>
        );
    }
}
export default DadosGerais;
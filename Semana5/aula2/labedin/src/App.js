import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from "./components/CardPequeno/CardPequeno";
import imgPessoal from "./imagens/pessoal.jpg";
import imgNcLogo from "./imagens/newcomputer.PNG";
import imgCliper from "./imagens/cliper.PNG";
import iconEmail from "./imagens/email.svg"
import iconLocal from "./imagens/local.svg"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imgPessoal}
          nome="Vinicius Silveira Moraes" 
          descricao="Olá, sou o Vinícius, aluno da turma Dumont na Labenu, sou natural de Jaguarão Rio Grande do Sul, amante da música, cinema e esportes. Músico de chuveiro, desportista dos finais de semana e ruim de mira no CS, porém Global de Dust2."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

        <CardPequeno        
          imagem={iconEmail}
          dado = "Email: "
          texto="vinicius_jag@hotmail.com"        
        />        

        <CardPequeno        
          imagem={iconLocal}
          dado = "Endereço: "
          texto="Av. JK de Oliveira 2200"        
        />        
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={imgNcLogo}
          nome="Newcomputer" 
          descricao="Atendimento ao público e manutenção de computadores." 
        />
        
        <CardGrande 
          imagem={imgCliper}
          nome="Cliper" 
          descricao="Atendimento, manutenção de computadores" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;

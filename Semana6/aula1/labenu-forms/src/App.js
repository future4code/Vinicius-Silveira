import React from 'react';
import DadosGerais from "./Components/Etapa1";
import InfoSuperior from "./Components/Etapa2";
import InfoGeraisEnsino from "./Components/Etapa3";
import Final from "./Components/Final";

import './App.css';

function App() {
  return (
    <div>
      <DadosGerais/>    
      <InfoSuperior/>
      <InfoGeraisEnsino/>
      <Final/>
    </div>
  );
}

export default App;

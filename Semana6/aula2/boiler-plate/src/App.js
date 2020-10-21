import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Texto da primeira tarefa',
          completa: false // Indica se a tarefa está completa (true ou false)
        },
        {
          id: Date.now()+1,
          texto: 'Texto da segunda tarefa',
          completa: false // Indica se a tarefa está completa (true ou false)
        }
      ],
      inputValue: '',
      filtro: ''
    }

  componentDidUpdate() {
    console.log('Atualizou')//verificando se está entrando no componente
    localStorage.setItem("tarefas",JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    console.log('Montou') //verifica se está entrando no componente
    if (localStorage.getItem("tarefas")) {
      this.setState({tarefas: JSON.parse(localStorage.getItem("tarefas"))})
    }      
  }

  //Input controlado
  onChangeInput = (event) => {
    this.setState({inputValue:event.target.value})
  }

  criaTarefa = () => {        
    const novaTarefa = 
      {
        id:Date.now(),
        texto:this.state.inputValue,
        completa:false
      }          
    const copiaDoEstado = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas:copiaDoEstado})
     
  }

  selectTarefa = (id) => {    
    const novaListaTarefa = this.state.tarefas.map((tarefa)=>{
      if (id === tarefa.id){
        const novaTarefa = {...tarefa,completa:!tarefa.completa}        
        return novaTarefa
      }else{
        return tarefa
      }
      
    })
    this.setState({tarefas:novaListaTarefa})    
  }

  onChangeFilter = (event) => {
    this.setState({filtro:event.target.value})        
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}                
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App

import React, {useState} from 'react'
import Pretenders from './components/Pretenders/Pretenders'
import Matches from './components/Matches/Matches'

function App () {
  const [switchScreen,setSwitchScreen]=useState(false)

  const onClickchangeState = ()=>{
    setSwitchScreen(!switchScreen)
  }
  const switchComponent = ()=>{
    if (switchScreen){
      return <Pretenders
        onClickPretenders={onClickchangeState}
      />
    }else{
      return <Matches
        onClickMatches={onClickchangeState}
      />
    }
  }
  
  return(
    <div>
      Testes
      {switchComponent()}      
    </div>
  )
}

export default App

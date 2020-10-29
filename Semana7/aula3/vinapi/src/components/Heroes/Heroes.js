import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

class Heroes extends React.Component {
    state={
        heroesList:[]
    }
    render(){
        return(
            <div>
                <h1>Heroes</h1>
                <button onClick={this.props.onClickSwitchScreen}>Switch Screen</button> 
            </div>
        )
    }
}

export default Heroes
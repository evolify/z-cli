import React from 'react'

export default class App extends React.Component{
  state={
    num: 0
  }
  render(){
    return(
      <div onClick={()=>this.setState({num: this.state.num+1})}>
        <input type="text" value={this.state.num}/>
        hello web-azzz!
      </div>
    )
  }
}
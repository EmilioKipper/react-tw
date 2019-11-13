import React, { Component } from 'react'
import Time from './Time'

class MyButton extends Component {

  constructor(props){
    super(props);
    this.state = {
      isOn: true
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState((state, props) => {
      return {isOn: !state.isOn}
    })
  }

  render() {
    const {state} = this;
    return (
      <div>
        <button onClick={this.handleClick}>{ state.isOn ? 'Ligado' : 'Desligado' }</button>
        {
          state.isOn ? <Time /> : 'OFF'
        }
      </div>
    )
  }
}

/* function MyButton(props){
  function sayHello(){
    alert('help')
  }

  return <button onClick={sayHello} > Click me</button>
} */

export default MyButton

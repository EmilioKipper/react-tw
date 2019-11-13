import React, { Component } from 'react'
import ReactDOM from 'react-dom';

class Time extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0
    }  
  }
  // lifecycle hooks
  componentDidMount(){
    this.interval = setInterval(() => {
      // console.log('======this.state.time: ', this.state.time)
      this.setState((state, props) => {
        return {
          time: state.time + 1
        }
      })
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    const { state, props} = this,
      element = <div>{state.time}</div>;
    return props.container ? ReactDOM.createPortal(element, props.container) : element
  }
}

export default Time

import React, { Component } from 'react';
import { Channel } from '../services/EventEmitter';


class ClickList extends Component {
  constructor(props){
    super(props);
    this.state = {
      total: 0,
      hasError: false
    }
    this.setTotal = this.setTotal.bind(this)
    this.restart = this.restart.bind(this)

  }

  componentDidMount(){
    Channel.on('batata', this.setTotal)
  }

  componentWillUnmount(){
    Channel.removeListener('batata', this.setTotal)
  }
  // aciona antes do render
  static getDerivedStateFromError(error){
    return {
      total: 0,
      hasError: true
    }
  }
  //aciona dps do render
  componentDidCatch(error){
    console.log('======error: ', error)
  }

  restart(){
    this.setState({
      total: 0,
      hasError: false
    })
  }

  setTotal(){
    this.setState(state => {
      return {
        total: state.total + 1
      }
    })
  }
  
  render() {
    const {state} = this
    if(state.hasError){
      return <button onClick={this.restart}>Restart</button>
    }
    return (
      <div>
        Total: {state.total}
        <ul>
          {this.props.children.map((item, index) => {
            return <item.type index={index} >
                {item.props.children}
              </item.type>
          })}
        </ul>
      </div>
    )
  }
}

export default ClickList

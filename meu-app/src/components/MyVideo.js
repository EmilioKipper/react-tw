import React, { Component } from 'react'
import MyButton from './MyButton';

class MyVideo extends Component {
  constructor(props){
    super(props)
    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.myVideo = React.createRef();
  }

  start(){
    this.myVideo.current.play()
  }
  stop(){
    this.myVideo.current.pause()
  }
  render() {
    return (
      <div>
        <video ref={this.myVideo} width='100' src={this.props.src} />
        <button onClick={this.start}>Play</button>
        <button onClick={this.stop}>Pause</button>
      </div>
    )
  }
}

export default MyVideo

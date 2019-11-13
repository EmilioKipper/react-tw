import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Channel } from '../services/EventService';

class VideoPlayer extends Component {
  constructor(props){
    super(props);

    this.videoElement = React.createRef()
    this.toggleCinema = this.toggleCinema.bind(this)
  }

  toggleCinema(){
    Channel.emit('video:toggle-cinema')
  }
  render() {
    const {video, container} = this.props
    if(!container){
      return 'carregando'
    }else{

      const element = (
        <div className='video-player'>
          <video 
            src={video.url}
            controls autoPlay loop
            ref={this.videoElement}
          />
          <button onClick={this.toggleCinema}>[ ]</button>
        </div>
      )
      return ReactDOM.createPortal(element, container)
    }
  }
}

export default  VideoPlayer
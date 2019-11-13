import React, { Component } from 'react';
import './App.css';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import VideoCinema from './components/VideoCinema';
import { VideoService } from './services/VideoService';
import { Channel } from './services/EventService';
import VideoInline from './components/VideoInline';

class App extends Component{
  constructor(props){
    super(props)
    this.toggleCinema = this.toggleCinema.bind(this)
    this.selectVideo = this.selectVideo.bind(this)
    this.inlineVideo = React.createRef()
    this.cinemaVideo = React.createRef()
    this.state = {
      video: [],
      selectedVideo: {},
      videoContainerElement: this.inlineVideo
    }
  }

  async componentDidMount(){
    const videos = await VideoService.list();
    this.setState({videos})
    Channel.on('pastel', this.selectVideo)
    Channel.on('video:toggle-cinema', this.toggleCinema)
  }

  componentWillUnmount(){
    Channel.removeListener('pastel', this.selectVideo)
    Channel.removeListener('video:toggle-cinema', this.toggleCinema)
  }

  toggleCinema(){
    const currentElement = this.videoContainerElement,
      newContainer = currentElement === this.inlineVideo ? this.cinemaVideo : this.inlineVideo
    this.setState({
      videoContainerElement: newContainer
    })
  }

  selectVideo(video){
    console.log('======video: ', video)
    this.setState({
      selectVideo: video
    })
  }

  render(){
    const {state} = this
    return(
      <div className="App">
        <VideoPlayer video={state.selectedVideo} container={state.videoContainerElement.current} />
        <VideoInline>
          <div ref={this.inlineVideo}></div> 
        </VideoInline>
        
        <VideoList videos={state.videos} />

        <VideoCinema isActive={state.videoContainerElement === this.cinemaVideo}> 
          <div ref={this.cinemaVideo}></div> 
        </VideoCinema> 
      </div>
    )
  }

}

export default App;

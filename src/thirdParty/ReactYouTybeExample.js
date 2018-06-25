import React, {Component} from 'react';
import YouTube from 'react-youtube';

// https://youtu.be/1V4AscLidWg

class ReactYouTubeExample extends Component {
    state = {playerObj: null};
    videoOnReady(event) {
        const player = event.target
        this.setState({
            playerObj: player
        })
        player.seekTo(50)
    }
    videoOnPlay(event) {
        const player = event.target
        // console.log(player.getCurrentTime())
    }
    videoStateChange(event){
        const player = event.target
        console.log(player.getCurrentTime())
    }
    componentWillUnmount() {
        let {playerObj} = this.state
        console.log(playerObj.getCurrentTime())
    }
    render(){
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        }
        const {videoId} = this.props
        return (
            <YouTube 
                videoId={videoId} 
                opts={opts} 
                onReady={this.videoOnReady} 
                onPlay={this.videoOnPlay}
                onStateChange={this.videoStateChange}
            />
        )
    }
    
}

export default ReactYouTubeExample;
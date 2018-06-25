import React, { Component } from 'react'
import './App.css'

import ReactYoutube from './thirdParty/ReactYouTybeExample'
import PostList from './posts/PostList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ReactYoutube videoId="1V4AscLidWg" />
        <PostList />
      </div>
    )
  }
}

export default App

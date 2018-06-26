import React, { Component } from 'react'
import './App.css'

import ReactYoutube from './thirdParty/ReactYouTybeExample'
import ReactMarkdown from './thirdParty/ReactMarkdownExample';
import PostList from './posts/PostList'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <ReactMarkdown />
        <ReactYoutube videoId="1V4AscLidWg" />
        <PostList />
      </div>
    )
  }
}

export default App

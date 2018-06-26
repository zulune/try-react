import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';

class ReactMarkDownExample extends Component {
    render() {
        const input = '# <h1>Hello world</h1> [Max Cage](https://github/zulune) \n\nAnd this is paragraph'
        
        return (
            <ReactMarkdown source={input} />
        )
    }
}

export default ReactMarkDownExample;
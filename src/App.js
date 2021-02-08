import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pmain from './Pmain/Pmain'

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Pmain></Pmain>
            </div>
        )
    };
};


ReactDOM.render(<App/>,document.getElementById('root'));
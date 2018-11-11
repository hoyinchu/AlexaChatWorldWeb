import React, { Component } from 'react';
import Title from '../Title/title';
import Chat from '../Chat/Chat';
import Chart from '../Chart/Chart';
class Main extends Component {
    render() {
        return (
            <div>
                <Title />
                <Chat />
            </div>
        )
    }
}

export default Main;


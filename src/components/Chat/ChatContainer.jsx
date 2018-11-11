import React, {Component} from React;
import Chat from './Chat';

class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {
            messages: [],
            messageLimit: 50
        }
    }
    render() {
        return (
            <Chat messages={this.state.messages} messageLimit={this.state.messageLimit} />
        );
    }
}
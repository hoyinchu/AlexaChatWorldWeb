import React, { Component } from 'react';
import Bubble from './Bubble.jsx';
import UniqueId from 'react-html-id';
import Common from '../../common/common.jsx';

const chatStyle = {
    backgroundColor: "whitesmoke",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    maxWidth: "1200px",
    margin: "auto"
};

const sampleMessages = {
    "messsages": [
        {
            "text": "Hello from Wentworth!"
        },
        {
            "text": "Hello from Northeastern!"
        },
        {
            "text": "Alexa Chat World is amazing!"
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut imperdiet dui, sed ultricies risus. Curabitur purus odio, fringilla eget lacinia non, finibus at nisi. Praesent vitae elit sed ex cursus placerat. Fusce velit elit, sodales vitae semper eu, aliquam in ligula. Aliquam aliquet iaculis ligula vitae aliquet. Sed sit amet luctus sem. Pellentesque sagittis sed ligula in tempor. Mauris placerat magna at commodo imperdiet. Pellentesque luctus, mauris sit amet ultrices feugiat, odio erat congue ante, ut rhoncus arcu ipsum ut mauris. Donec non risus eu sem tempus efficitur non ac massa. Mauris quis metus elementum, tincidunt tortor et, ullamcorper augue. Donec urna magna, bibendum at elementum quis, pharetra ac orci. Duis luctus tellus eget velit gravida aliquet."
        },
        {
            "text": "This is so sad Alexa play despacito"
        }
    ]
}

class Chat extends Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
        this.state = {
            messages: sampleMessages.messsages,
            messageLimit: 50,
            isLoaded: false
        }
        console.log(sampleMessages)
    }
    // componentDidMount() {
    //     fetch("../../json/sampleChat.json")
    //         .then((result) => {
    //             console.log("result fetched")
    //             console.log("results are " + JSON.stringify(result))
    //             this.setState({
    //                 isLoaded: true,
    //                 message: result.messages
    //             });
    //         })
    // }
    render() {
        return (
            <div style={chatStyle}>
                {this.state.messages.map((message, index) => { return <Bubble key={this.nextUniqueId()} message={message} index={index} />; })}
            </div>
        );
    }
}

export default Chat;
import React, { Component } from 'react';
import Bubble from './Bubble.jsx';
import UniqueId from 'react-html-id';
import Chart from '../Chart/Chart';
import AOS from 'aos';

const chatStyle = {
    backgroundColor: "#686868",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",
    maxWidth: "1200px",
    width: "100%",
    margin: "auto"
};

const sampleMessages = {
    "messsages": [
        {
            "text": "MacOS"
        },
        {
            "text": "Windows"
        },
        {
            "text": "Linux"
        },
        {
            "text": "MacOS"
        },
        {
            "text": "Windows"
        },
        {
            "text": "Linux"
        },
        {
            "text": "MacOS"
        },
        {
            "text": "Windows"
        },
        {
            "text": "Linux"
        },
        {
            "text": "MacOS"
        },
        {
            "text": "Windows"
        },
        {
            "text": "Linux"
        }
    ]
}

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyLfYC16laU773La'
});
var base = Airtable.base('appXMZRuL9POsuuix');

class Chat extends Component {
    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);
        this.state = {
            messages: [],
            messageLimit: 50,
            isLoaded: false
        }
    }
    componentWillMount() {
        console.log("component mounting");
        AOS.init();
        let self = this;
        let messagesArray = []
        base('Table 1').select({
            view: "Grid view"
        }).eachPage(function page(records, fetchNextPage) {
            // This function (`page`) will get called for each page of records.
            records.forEach(function(record) {
                let curRecord = record.get('operating_systems');
                console.log('Retrieved', curRecord);
                if (curRecord !== undefined) {
                    messagesArray.push(record.get('operating_systems'))
                }
            });
            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            fetchNextPage();
        }, function done(err) {
            if (err) { console.error(err); return; }
            self.setState({
                isLoaded: true,
                messages: messagesArray
            })
        });

    }
    getOsVotes() {
        let windowCount = 0;
        let macCount = 0;
        let linuxCount = 0;
        for (let i = 0; i < this.state.messages.length; i++) {
            let curMessage = this.state.messages[i];
            if (curMessage.toLowerCase() === "windows" ||
                curMessage.toLowerCase() === "pc") {
                windowCount++;
            }
            else if (curMessage.toLowerCase() === "macos" ||
                    curMessage.toLowerCase() === "apple" ||
                    curMessage.toLowerCase() === "macintosh") {
                macCount++;
            }
            else if (curMessage.toLowerCase() === "linux") {
                linuxCount++;
            }
        }
        return [windowCount, macCount, linuxCount]
    }
    render() {
        console.log("Component Rendering");
        if (!this.state.isLoaded) {
            return <div><img src="../../common/loading.gif"/></div>
        }
        return (
            <div>
                <div style={chatStyle}>
                    {this.state.messages.map((message, index) => { return <Bubble key={this.nextUniqueId()} message={message} index={index} />; })}
                </div>
                <Chart data={this.getOsVotes()} />
            </div>
        );
    }
}

export default Chat;
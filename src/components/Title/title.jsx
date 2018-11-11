import React, { Component } from 'react';
import Common from '../../common/common.jsx';

const titleStyle = {
    display: 'flex',
    justifyContent: 'center',
    border: '2px solid black',
    // borderTopLeftRadius: '15px',
    // borderTopRightRadius: '15px',
    width: "100%",
    margin: 'auto',
    backgroundColor: Common.COLORS.alexaBlack,
}

const titleTextStyle = {
    fontSize: 32,
    color : Common.COLORS.alexaBlue,
    fontWeight: "bold"
}

class Title extends Component {
    render() {
        return (
            <div className="title" style={titleStyle}>
                <span className="title-text" style={titleTextStyle}>Welcome to the Alexa Chat World!</span>
            </div>
        )
    }
}

export default Title;

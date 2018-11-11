import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../common/style.css';

const evenBubbleStyle = {
    minHeight: "60px",
    minWidth: "180px",
    maxWidth: "80%",
    display: "flex",
    border: "1px solid gray",
    borderRadius: "15px",
    padding: "5px 10px 5px 10px",
    marginLeft: "5px",
    float: "left"
}

const oddBubbleStyle = {
    minHeight: "60px",
    minWidth: "180px",
    maxWidth: "80%",
    display: "flex",
    border: "1px solid gray",
    borderRadius: "15px",
    padding: "5px 10px 5px 10px",
    marginRight: "5px",
    float: "right"
}

class Bubble extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let bubbleOrder = this.props.index % 2 === 0 ? "even-bubble" : "odd-bubble";
        let bubbleStyle = bubbleOrder === "even-bubble" ? evenBubbleStyle : oddBubbleStyle;
        return (
            <div className="row">
                <div className={bubbleOrder} style={bubbleStyle}>
                    {this.props.message.text}
                </div>
                <div style={{clear: "both"}}></div>
            </div>
        );
    }
}

export default Bubble;
Bubble.propTypes = {
    message: PropTypes.object,
    index: PropTypes.number
}


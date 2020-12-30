import React, { Component } from 'react';

export default class DelayedButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            delay: this.props.delay
        }
    }

    handleOnClick = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
        }, this.props.delay)
    }

    render() {
        return (
            <button onClick={this.handleOnClick}></button>
        )
    }
}
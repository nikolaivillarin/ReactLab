import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { getClockTime } from './lib';

class Clock extends Component {
    constructor() {
        super();

        this.state = getClockTime();
    }

    componentDidMount() {
        console.log('Starting Clock');

        this.ticking = window.setInterval(() => 
            this.setState(getClockTime())
        , 1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticking);

        console.log('Stopping Clock');
    }

    render() {
        const { hours, minutes, seconds, ampm } = this.state;

        return (
            <div className="clock">
                <span>{hours}</span>
                <span>:</span>
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
                <span>{ampm}</span>
                <button onClick={this.props.onClose}>X</button>
            </div>
        );
    }
}

const target = document.getElementById('create-article-form');

target ? ReactDOM.render(<Clock onClose={() => unmountComponentAtNode(target) } />, target) : false;

export default Clock;
import React, { Component } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

function getClockTime() {
    // Get the Current Time
    var date = new Date();
    var time = '';

    // Serialize clock time
    var time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    };

    // Convert to civilian time
    if (time.hours == 12) {
        time.ampm = 'PM';
    } else if (time.hours > 12) {
        time.ampm = 'PM';
        time.hours -= 12;
    }

    // Prepend a 0 on the hours to make double digits
    if (time.hours < 10) {
        time.hours = '0' + time.hours;
    }

    // Prepend a 0 on the minutes to make double digits
    if (time.minutes < 10) {
        time.minutes = '0' + time.minutes;
    }

    // Prepend a 0 on the seconds to make double digits
    if (time.seconds < 10) {
        time.seconds = '0' + time.seconds;
    }

    // Format the clock time as a string "hh:mm:ss tt"
    return time.hours + ':'
        + time.minutes + ':'
        + time.seconds + ' '
        + time.ampm;
}

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

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
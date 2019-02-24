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
    return {
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds,
        ampm: time.ampm
    };
}

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

const compose = (...fns) =>
    (arg) =>
        fns.reduce(
            (composed, f) => f(composed), arg
        );

const serializeClockTime = date => ({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
});

const civilianHours = clockTime => ({
    ...clockTime,
    hours: (clockTime.hours > 12) ? 
        clockTime.hours - 12 : 
        clockTime.hours
});

const appendAMPM = clockTime => ({
    ...clockTime,
    ampm: (clockTime.hours >= 12) ? "PM" : "AM"
});

const display = target => time => target(time);

const displayTradition = function (target) {
    return function (time) {
        target(time);
    }
}

const formatClock = format =>
    time =>
        format.replace('hh', time.hours)
            .replace('mm', time.minutes)
            .replace('ss', time.seconds)
            .replace('tt', time.ampm);

const prependZero = key => clockTime => ({
    ...clockTime,
    [key]: (clockTime[key] < 10) ?
        '0' + clockTime[key] : clockTime[key]
});

const convertToCivilianTime = clockTime =>
    compose(
        appendAMPM,
        civilianHours
    )(clockTime);

const doubleDigits = civilianTime =>
    compose(
        prependZero('hours'),
        prependZero('minutes'),
        prependZero('seconds')
    )(civilianTime);

const startTicking = () =>
    setInterval(
        compose(
            clear,
            getCurrentTime,
            serializeClockTime,
            convertToCivilianTime,
            doubleDigits,
            formatClock('hh:mm:ss tt'),
            display(log)
        ), oneSecond()
    );

startTicking();

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

target ? render(<Clock onClose={() => unmountComponentAtNode(target) } />, target) : false;

export default Clock;
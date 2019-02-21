import d3 from 'd3';
import React, { Component } from 'react';
import { render } from 'react-dom';

const historicDatesForSkiing = [
    {
        year: 1879,
        event: "Ski Manufacturing Begins"
    },
    {
        year: 1882,
        event: "US Ski Club Founded"
    },
    {
        year: 1924,
        event: "First Winter Olympics Held"
    },
    {
        year: 1926,
        event: "First US Ski Shop Opens"
    },
    {
        year: 1932,
        event: "North America's First Rope Tow Spins"
    },
    {
        year: 1936,
        event: "First Chairlift Spins"
    },
    {
        year: 1949,
        event: "Squaw Valley, Mad River Glen Open"
    },
    {
        year: 1958,
        event: "First Gondola Spins"
    },
    {
        year: 1964,
        event: "Plastic Buckle Boots Available"
    }
]

class Timeline extends Component {
    constructor({data = []}) {
        super({data});

        const times = d3.extent(data.map(d => d.year));
        const range = [50, 450];

        this.state = { data, times, range };
    }

    componentDidMount() {
        let group;
        const { data, times, range } = this.state;
        const { target } = this.refs;
        const scale = d3.time.scale().domain(times).range(range);

        d3.select(target)
            .append('svg')
            .attr('height', 200)
            .attr('width', 500);

        group = d3.select(target.children[0])
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr(
                'transform',
                (d, i) => 'translate(' + scale(d.year) + ', 0)'
            );
        
        group.append('circle')
            .attr('cy', 160)
            .attr('r', 5)
            .style('fill', 'blue');
        
        group.append('text')
            .text(d => d.year + ' - ' + d.event)
            .style('font-size', 10)
            .attr('y', 115)
            .attr('x', -95)
            .attr('transform', 'rotate(-45)');
    }

    render() {
        return (
            <div className="timeline">
                <h1>{this.props.name} Timeline</h1>
                <div ref="target"></div>
            </div>
        );
    }
}

render(
    <Timeline name="History of Skiing"
        data={historicDatesForSkiing} />,
    document.getElementById('create-article-form"')
);

export default Timeline;
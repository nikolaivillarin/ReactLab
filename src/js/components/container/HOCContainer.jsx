import React, { Component } from 'React';
import { render } from 'react-dom';
import fetch from 'isomorphic-fetch';

const PeopleList = ({ data }) =>
    <ol className="people-list">
        {data.results.map((person, i) => {
            const { first, last } = person.name;

            return <li key={i}>{first} {last}</li>
        })}
    </ol>

const DataComponent = (ComposedComponent, url) =>
    class DataComponent extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: [],
                loading: false,
                loaded: false
            };
        }

        componentWillMount() {
            this.setState({ loading: true });

            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({
                    loaded: true,
                    loading: false,
                    data
                }));
        }

        render() {
            return (
                <div className="data-component">
                    {(this.state.loading) ?
                        <div>Loading...</div> :
                        <ComposedComponent {...this.state} />}
                </div>
            );
        }
    }

const RandomMeUser = DataComponent(
    PeopleList,
    "https://randomuser.me/api/"
);

render(
    <RandomMeUser count={10} />,
    document.getElementById('create-article-form')
);
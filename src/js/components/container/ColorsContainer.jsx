import React, { Component } from "react";
import ReactDOM from "react-dom";
import AddColorForm from "../container/AddColorFormContainer.jsx";
import ColorList from "../presentational/ColorList.jsx";

class ColorApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: []
        }
    }

    componentDidMount() {
        this.setState({colors: [
            {
                "id": "0175d1f0-a8c6-41bf-8d02-df5734d829a4",
                "title": "ocean at dusk",
                "color": "#00c4e2",
                "rating": 5
            },
            {
                "id": "83c7ba2f-7392-4d7d-9e23-35adbe186046",
                "title": "lawn",
                "color": "#26ac56",
                "rating": 3
            },
            {
                "id": "a11e3995-b0bd-4d58-8c48-5e49ae7f7f23",
                "title": "bright red",
                "color": "#ff0000",
                "rating": 0
            }
        ]});
    }

    render() {
        const { colors } = this.state;

        return (
            <div className="app">
                <AddColorForm />
                <ColorList colors={colors} />
            </div>
        );
    }
}

const wrapper = document.getElementById("create-article-form");

wrapper ? ReactDOM.render(<ColorApp />, wrapper) : false;

export default ColorApp;
import React, { Component } from "react";
import PropTypes from "prop-types";

class AddColorForm extends Component {
    constructor(props) {
        super(props);

        this.submit = this.submit.bind(this);
    }

    submit(e) {
        const { _title, _color } = this.refs;

        e.preventDefault();

        this.props.onNewColor(_title.value, _color.value);

        _title.value = '';
        _color.value = '#000000';
        _title.focus();
    }

    render() {
        return (
            <form onSubmit={this.submit}>
                <input ref="_title" 
                    type="text" 
                    placeholder="color title..." required />
                <input ref="_color" 
                    type="color" required />
                <button>ADD</button>
            </form>
        );
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func
};

AddColorForm.defaultProps = {
    onNewColor: f => f
};

// const wrapper = document.getElementById("create-article-form");

// const logColor = (title, color) => { 
//     console.log(`TODO: add new ${title} and ${color} to the list`);
//     console.log(`TODO: render UI with new Color`);
// };

// wrapper ? ReactDOM.render(<AddColorForm onNewColor={logColor} />, wrapper) : false;

export default AddColorForm;
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Star from "../presentational/Star.jsx";
import PropTypes from "prop-types";

class StarRating extends Component {
    constructor(props) {
        super(props);

        this.state = {
            starsSelected: 0
        };

        this.change = this.change.bind(this);
    }

    change(starsSelected) {
        this.setState({starsSelected});
    }

    render() {
        const {totalStars} = this.props;
        const {starsSelected} = this.state;

        return (
            <div className="star-rating">
                {/* Array(totalStars) creates an Array object
                    so it needs to be spread to [undefined, undefined, undefined]
                 */}
                {[...Array(totalStars)].map((n, i) =>
                    <Star key={i}
                        selected={i < starsSelected}
                        onClick={() => this.change(i + 1)}
                    />
                )}
                <p>
                    {starsSelected} of {totalStars} stars
                </p>
            </div>
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number
};

StarRating.defaultProps = {
    totalStars: 5
};

const wrapper = document.getElementById("create-article-form");

wrapper ? ReactDOM.render(<StarRating totalStars={5} />, wrapper) : false;

export default StarRating;
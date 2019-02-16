import React from "react";
import StarRating from "../presentational/StarRating.jsx";

const Color = ({ title, color, rating = 0 }) =>
    <section className="colors">
        <h1>{title}</h1>
        {/* Niko what's the purpose of {{}} */}
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} />
        </div>
    </section>

export default Color;
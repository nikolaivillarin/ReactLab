import React from "react";
import StarRating from "../presentational/StarRating.jsx";

const Color = ({ title, color, rating = 0, onRemove = f => f, onRate = f => f }) =>
    <section className="colors">
        <h1>{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color"
            style={{ backgroundColor: color }}>
        </div>
        <div>
            <StarRating starsSelected={rating} onRate={onRate} />
        </div>
    </section>

export default Color;
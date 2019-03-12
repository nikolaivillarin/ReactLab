import React from 'react';
import PropTypes from 'prop-types';

const options = {
    date: "SORTED_BY_DATE",
    title: "SORTED_BY_TITLE",
    rating: "SORTED_BY_RATING"
};

const SortMenu = ({ sort = "SORTED_BY_DATE", onSelect = f => f }) =>
    <nav>
        <h1>Sort Colors</h1>
        {Object.keys(options).map((item, i) =>
            <a key={i}
                href="#"
                className = {(sort === options[item]) ? "selected" : null}
                onClick={e => {
                    e.preventDefault();

                    onselect(options[item]);
                }}>{item}</a>
        )}
    </nav>

SortMenu.propTypes = {
    sort: PropTypes.string,
    onSelect: PropTypes.func
};

export default SortMenu;
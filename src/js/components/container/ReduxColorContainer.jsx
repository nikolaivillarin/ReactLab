var colorData = {
    colors: [
        {
            "id": "8658c1d0-9eda-4a90-95e1-8001e8eb6036",
            "title": "Ocean Blue",
            "color": "#0070ff",
            "rating": 3,
            "timestamp": "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        },
        {
            "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
            "title": "Tomato",
            "color": "#d10012",
            "rating": 2,
            "timestamp": "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
        },
        {
            "id": "58d9caee-6ea6-4d7b-9984-65b145031979",
            "title": "Lawn",
            "color": "#67bf4f",
            "rating": 1,
            "timestamp": "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        },
        {
            "id": "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
            "title": "Party Pink",
            "color": "#ff00f7",
            "rating": 5,
            "timestamp": "Wed Mar 9 2016 03:26:00 GMT-0800 (PST)"
        }
    ],
    sort: "SORTED_BY_DATE"
};

import ColorConstants from '../constants/ColorConstants.jsx';

// A leaf
// Takes in an object and returns an object
// Actions to handle:
// - RATE_COLOR
// - ADD_COLOR
export const color = (state={}, action) => {
    switch (action.type) {
        case ColorConstants.ADD_COLORS:
            return {
                id: action.id,
                title: action.title,
                color: action.color,
                timestamp: action.timestamp,
                rating: 0
            }
        case ColorConstants.RATE_COLOR:
            return (state.id !== action.id) ?
                state : {
                    ...state,
                    rating: action.rating
                }
        default:
            return state;
    }
};

// A branch
// Takes in an array and returns an array
// Actions to handle:
// - ADD_COLOR
// - REMOVE_COLOR
// - RATE_COLOR
export const colors = (state=[], action) => {
    return [];
};

// A Leaf
// Takes in a string and returns a string
// Actions to handle:
// - SORT_COLORS
export const sort = (state="SORTED_BY_DATE", action) => {
    return '';
};
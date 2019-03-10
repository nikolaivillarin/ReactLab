import { createStore, combineReducers } from 'redux';
import { colors, sort } from '../reducers/ColorReducer.jsx';

const initialState = {
    colors: [
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
            title: "Rad Red",
            color: "#FF0000",
            rating: 3,
            timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
            title: "Crazy Green",
            color: "#00FF00",
            rating: 0,
            timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
        },
        {
            id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
            title: "Big Blue",
            color: "#0000FF",
            rating: 5,
            timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
        }
    ],
    sort: "SORTED_BY_TITLE"
};

// Set's initial state based on what is stored in local storage
const store = createStore(
    combineReducers({ colors, sort }),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) : {}
);

// Updates local storage when state changes
store.subscribe(() => {
    localStorage['redux-store'] = JSON.stringify(store.getState());
});

console.log('current color count', store.getState().colors.length);
console.log('current state', store.getState());

store.dispatch({
    type: "ADD_COLOR",
    id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
    title: "Party Pink",
    color: "#F142FF",
    timestamp: new Date().toString()
});

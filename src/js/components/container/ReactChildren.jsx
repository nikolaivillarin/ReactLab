import React, { Children } from "react";
import ReactDOM from "react-dom";

const findChild = (children, child) => {
    var childArray = Children.toArray(children);
    var filtered = childArray.filter(c => c.type === child)[0];
    
    return filtered;
}

const WhenTruthy = ({children}) =>
    Children.only(children);

const WhenFalsy = ({children}) =>
    Children.only(children);

const Display = ({ ifTruthy = true, children }) =>
    (ifTruthy) ?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy);

const age = 19;

ReactDOM.render(
    <Display ifTruthy={age >= 21}>
        <WhenTruthy>
            <h1>You can Enter</h1>
        </WhenTruthy>
        <WhenFalsy>
            <h1>Beat it Kid</h1>
        </WhenFalsy>
    </Display>,
    document.getElementById("create-article-form")
);
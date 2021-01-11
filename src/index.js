// 396. JavaScript Expressions in JSX & E@6 Template Literals

import React from "react";
import ReactDOM from "react-dom";

// creating js constant and storing its data
const firstName = "Mel";
const lastName = "B-G";

const luckyNumber = "777";

// in order to plug the js constant in the HTML inside the JSX file,
// write the constant in curly brackets, wrap the javascript inside curly braces
ReactDOM.render(
  <div>
    {/* create empty quotation marks for "space" between first and last name */}
    <h1>Hello {firstName + " " + lastName}!</h1>

    {/* Alternatively,... */}
    <h1>
      Hello {firstName} {lastName}!
    </h1>

    {/* ES6 Template Literal */}
    <h1>Hello {`${firstName} ${lastName}`}!</h1>

    {/* using js constant */}
    {/* <p>Your lucky number is {luckyNumber}</p> */}

    {/* Or you can write some maths! */}
    {/* <p>Your lucky number is {4 + 3}</p> */}

    {/* Using random number */}
    {/* <p>Your luck number is {Math.random()}</p> */}

    {/* Using random multiply 10 */}
    <p>Your luck number is {Math.floor(Math.random() * 10)}</p>

    {/* TAKEAWAY: JavaScript expression inside HTML = curly brackets {} */}
  </div>,
  document.getElementById("root")
);

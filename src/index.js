// 396. JavaScript Expressions in JSX & E@6 Template Literals

import React from "react";
import ReactDOM from "react-dom";

// creating js constant and storing its data
const name = "Mel";

// in order to plug the js constant in the HTML inside the JSX file,
// write the constant in curly brackets, wrap the javascript inside curly braces
ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

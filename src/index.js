// 396. JavaScript Expressions in JSX & E@6 Template Literals

import React from "react";
import ReactDOM from "react-dom";

// creating js constant and storing its data
const name = "Mel";

// in order to plug it in the HTML, write the constant in curly brackets
ReactDOM.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

import React from "react"

import ReactDOM from "react-dom/client"

let heading = <h1 id="heading">Hello JSX</h1>;

let sub = <h3 id="sub-heading">understandig little by little...</h3>;

let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
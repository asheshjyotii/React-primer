
const heading = 

React.createElement("div",{id:"parent"}, // parent

    [
        React.createElement("div",{id:"child1"}, // child

            [
                React.createElement("h1",{id:"heading"},"Hello React 👋"), 
                React.createElement("h2",{id:"sub-heading"},"understandig little by little...")
            ]
    ),
        React.createElement("div", {id:"child2"},
            [
                React.createElement("H1", {id:"heading"},"Bye React 👋"),
                React.createElement("h3",{id:"sub-heading"}, "Getting used to it...step by step...")
            ]
    )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


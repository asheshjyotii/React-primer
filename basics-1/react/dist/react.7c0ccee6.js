const heading = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {
            id: "heading"
        }, "Hello React \uD83D\uDC4B"),
        React.createElement("h2", {
            id: "sub-heading"
        }, "understandig little by little...")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("H1", {
            id: "heading"
        }, "Bye React \uD83D\uDC4B"),
        React.createElement("h3", {
            id: "sub-heading"
        }, "Getting used to it...step by step...")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=react.7c0ccee6.js.map

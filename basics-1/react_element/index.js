import ReactDOM from "react-dom/client"

const SubHeading = () => (
    <h3 id="sub-heading">This is sub-heading</h3>
);
const Heading = () => (
    <div>
    <h1 id="heading" >Hello, this is Heading</h1>
    < SubHeading />
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading/>)
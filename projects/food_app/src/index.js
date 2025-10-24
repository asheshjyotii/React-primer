import ReactDOM from "react-dom/client";

import BodyComponent from './components/BodyComponent';

import Header from "./components/Header";



 


// Header component


// Card component


// Body component



// Main App placeholder component
const AppLayout = () => {
      return(
    <div className="app-layout">
        <Header/>
        <BodyComponent/>
    </div>
);}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
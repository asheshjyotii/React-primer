import ReactDOM from "react-dom/client"



// Header component
const Header = () => (
    <div className="header">

        <div className="logo-container">
            <img src="https://cdn-icons-png.flaticon.com/512/9425/9425742.png" className="logo-img"/>
            <span className="logo-name">Bowl</span>
        </div>

        <div className="menu-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <img src="https://cdn-icons-png.flaticon.com/512/5993/5993827.png"/>
            </ul>
        </div>
   
    </div>
)

// Main App placeholder component
const AppLayout = () => (
    <div className="app-layout">
        <Header/>
    </div>
);

root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
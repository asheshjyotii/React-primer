import ReactDOM from "react-dom/client"



// Header component
const Header = () => (
    <div className="header">

        <div className="logo-container">
            <img src="https://cdn-icons-png.flaticon.com/512/8620/8620932.png" className="logo-img"/>
            <span className="logo-name">bowl</span>
        </div>

        <div className="menu-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <img className="cart-img" src="https://cdn-icons-png.flaticon.com/512/5993/5993827.png"/>
                <input className="search-box-internal"></input>
                <button className="search-button">search</button>
            </ul>
        </div>
        {/* <div className="search-box">
                <input className="search-box-internal"></input>
            </div> */}
   
    </div>
)

// Card component
const CardComponent = () => (
    
        <div className="card-structure">
            <div className="card-contents">
                <div className="restaurant-img-container">
                <img className="restaurant-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/fb3fdd64-979e-42cf-84b0-8ac04b8b87f9_425549.JPG" />
                </div>
                
                
                <div className="restaurant-details">
                    <div className="restaurant-name">
                        <span >
                            KFC
                        </span>
                    </div>
                    <div className="restaurant-other-details">
                        <img src="https://cdn-icons-png.flaticon.com/512/5323/5323711.png" className="rating-icon"/>
                        <span className="restaurant-rating-text">
                            4.4
                        </span>
                        <span className="restaurant-details-divider">
                            |
                        </span>
                        <span className="restaurant-delivery-time">
                        20-25 mins
                        </span>
                    </div>
                </div>
                <div className="restaurant-offerings">
                    <span>Burgers, Fast Food, Rolls & Wraps</span>
                    <br></br>
                    <span>Cooch Behar Locality</span>
                </div>
            </div>
        </div>

);

// Body component
const BodyComponent = () => (
    <div className="body">
        
        <div className="card-space">
            
                <div className="restaurant-card-container">
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
            
        </div>
    </div>
);


// Main App placeholder component
const AppLayout = () => (
    <div className="app-layout">
        <Header/>
        <BodyComponent/>
    </div>
);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
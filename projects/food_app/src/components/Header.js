import { LOGO_IMG, CART_LOGO } from "../utils/constants";
const Header = () => {
    return(
  <div className="header">

      <div className="logo-container">
          <img src={LOGO_IMG} className="logo-img"/>
          <span className="logo-name">bowl</span>
      </div>

      <div className="menu-items">
          <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Contact us</li>
              <img className="cart-img" src={CART_LOGO}/>
              <input className="search-box-internal"></input>
              <button className="search-button">search</button>
          </ul>
      </div>
      {/* <div className="search-box">
              <input className="search-box-internal"></input>
          </div> */}
 
  </div>
);}


export default Header;
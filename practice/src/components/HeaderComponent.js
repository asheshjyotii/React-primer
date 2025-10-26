import { CART_LOGO, LOGO_IMG } from "../utils/constants";

const HeaderComponent  =() => {

    return (
        <div className="header-layout">
        <img className="logo-img" src={LOGO_IMG}/>
        <img className="cart-img" src={CART_LOGO}/>
        </div>
    )
}

export default HeaderComponent;
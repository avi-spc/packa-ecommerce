import { Link } from "react-router-dom";

import NavCart from "./NavCart";
import NavLocation from "./NavLocation";
import NavLogo from "./NavLogo";
import NavOrders from "./NavOrders";
import NavSearch from "./NavSearch";

const Navbar = () => {
    return (
        <nav className="nav-primary">
            <Link to="/">
                <NavLogo />
            </Link>

            <NavSearch />
            <NavLocation />
            
            <Link to="/returns_orders">
                <NavOrders />
            </Link>
            
            <Link to="/shopcart">
                <NavCart />
            </Link>
        </nav>
    );
};

export default Navbar;

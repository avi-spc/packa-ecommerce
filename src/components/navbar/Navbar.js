import NavCart from "./NavCart";
import NavLocation from "./NavLocation";
import NavLogo from "./NavLogo";
import NavOrders from "./NavOrders";
import NavSearch from "./NavSearch";

const Navbar = () => {
    return (
        <nav className="nav-primary">
            <NavLogo />
            <NavSearch />
            <NavLocation />
            <NavOrders />
            <NavCart />
        </nav>
    );
};

export default Navbar;

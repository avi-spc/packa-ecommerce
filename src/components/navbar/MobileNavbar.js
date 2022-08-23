import { Link, } from "react-router-dom";

const MobileNavbar = () => {
	return (
		<div className="mobile-navbar">
			<label htmlFor="mobile-nav">
				<img
					src="/images/icons/menu_icon.svg"
					alt=""
					className="mobile_navbar__icon"
				/>
			</label>
			<input type="checkbox" id="mobile-nav" />
			<ul className="mobile-navbar__nav-items-list">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/shopcart">Cart</Link>
				</li>
				<li>
					<Link to="/returns_orders">Orders</Link>
				</li>
			</ul>
		</div>
	);
};

export default MobileNavbar;

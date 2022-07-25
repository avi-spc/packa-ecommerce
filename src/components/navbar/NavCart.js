import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const NavCart = () => {
    const { cartTotalItems } = useContext(CartContext);

    return (
        <div className="nav-primary__cart">
            <img src="/images/icons/cart_icon.svg" alt="" />
            <div className="cart__heading-p-counter">
                <div className="cart__counter">
                    {cartTotalItems}
                </div>
                <div>Cart</div>
            </div>
        </div>
    );
};

export default NavCart;

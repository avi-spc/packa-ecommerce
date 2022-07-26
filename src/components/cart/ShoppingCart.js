import { useContext } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import CartProductsLater from "./CartProductsLater";
import CartProductsList from "./CartProductsList";
import CartSubtotal from "./CartSubtotal";
import SubtotalCheckout from "./SubtotalCheckout";
import { CartContext } from "../../contexts/cartContext";

const ShoppingCart = () => {
    const { cart, cartTotalQuantity, cartTotalAmount, emptyCart } = useContext(CartContext);

    return (
        <section className="section-shopping-cart container">
            <div className="shopping-cart__heading-p-btn margin-bottom-huge">
                <div className="primary-heading">Shopping Cart</div>
                <SecondaryButton name="Empty Cart" action={emptyCart} actionPayload={{}} />
            </div>
            <div className="shopping-cart__cart-p-subcheck">
                <div className="shopping-cart__cart-p-subtotal">
                    <CartProductsList cartProducts={cart} />
                    <CartSubtotal cartTotalAmount={cartTotalAmount} cartProductsCount={cartTotalQuantity} />
                </div>
                <SubtotalCheckout cartTotalAmount={cartTotalAmount} cartProductsCount={cartTotalQuantity} />
            </div>
            {/* <CartProductsLater /> */}
        </section>
    );
};

export default ShoppingCart;

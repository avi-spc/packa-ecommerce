import { useContext, useEffect } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import CartProductsLater from "./CartProductsLater";
import CartProductsList from "./CartProductsList";
import CartSubtotal from "./CartSubtotal";
import SubtotalCheckout from "./SubtotalCheckout";
import { CartContext } from "../../contexts/cartContext";
import { CheckoutContext } from "../../contexts/checkoutContext";

const ShoppingCart = () => {
    const { cart, isCartEmpty, cartTotalQuantity, cartTotalAmount, emptyCart, savedForLater } = useContext(CartContext);
    const { calculateCouponAmount } = useContext(CheckoutContext);

    useEffect(() => {
        if (isCartEmpty) {
            calculateCouponAmount(0);
        }
    }, [isCartEmpty]);

    return (
        <section className="section-shopping-cart container">
            <div className="shopping-cart__heading-p-btn margin-bottom-huge">
                <div className="primary-heading">Shopping Cart</div>
                {cartTotalQuantity ? <SecondaryButton name="Empty Cart" action={emptyCart} actionPayload={{}} /> : null}
            </div>
            <div className="shopping-cart__cart-p-subcheck">
                <div className="shopping-cart__cart-p-subtotal">
                    <CartProductsList cartProducts={cart} />
                    <CartSubtotal cartTotalAmount={cartTotalAmount} cartProductsCount={cartTotalQuantity} />
                </div>
                <SubtotalCheckout cartTotalAmount={cartTotalAmount} cartProductsCount={cartTotalQuantity} />
            </div>
            {savedForLater.length ? <CartProductsLater productsSavedForLater={savedForLater} /> : null}
        </section>
    );
};

export default ShoppingCart;

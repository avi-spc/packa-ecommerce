import SecondaryButton from "../buttons/SecondaryButton";
import CartProductsLater from "./CartProductsLater";
import CartProductsList from "./CartProductsList";
import CartSubtotal from "./CartSubtotal";
import SubtotalCheckout from "./SubtotalCheckout";

const ShoppingCart = () => {
    return (
        <section className="section-shopping-cart container">
            <div className="shopping-cart__heading-p-btn margin-bottom-huge">
                <div className="primary-heading">Shopping Cart</div>
                <SecondaryButton name="Empty Cart" />
            </div>
            <div className="shopping-cart__cart-p-subcheck">
                <div className="shopping-cart__cart-p-subtotal">
                    <CartProductsList />
                    <CartSubtotal />
                </div>
                <SubtotalCheckout />
            </div>
            <CartProductsLater />
        </section>
    );
};

export default ShoppingCart;

import { useContext } from "react";

import DeliveryAddressList from "./DeliveryAddressList";
import ItemsAndDelivery from "./ItemsAndDelivery";
import OrderSummary from "./OrderSummary";
import PaymentModes from "./paymant_modes/PaymentModes";
import { CartContext } from "../../contexts/cartContext";

const Checkout = () => {
    const { cart, cartTotalQuantity, cartTotalAmount } = useContext(CartContext);

    return (
        <section className="section-checkout container">
            <div className="primary-heading margin-bottom-huge">Checkout</div>
            <div className="checkout-details-p-summary">
                <div className="checkout-details">
                    <DeliveryAddressList />
                    <PaymentModes />
                    <ItemsAndDelivery cartProducts={cart}/>
                </div>
                <OrderSummary cartTotalAmount={cartTotalAmount} />
            </div>
        </section>
    );
};

export default Checkout;

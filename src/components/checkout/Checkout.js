import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import PaymentModes from "./paymant_modes/PaymentModes";

const Checkout = () => {
    return (
        <section className="section-checkout">
            <div className="primary-heading margin-bottom-huge">Checkout</div>
            <div className="checkout-details-plus-summary">
                <div className="checkout-details">
                    <DeliveryAddress />
                    <PaymentModes />
                </div>
                <OrderSummary />
            </div>
        </section>
    );
};

export default Checkout;

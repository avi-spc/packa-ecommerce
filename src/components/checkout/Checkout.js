import DeliveryAddressList from "./DeliveryAddressList";
import ItemsAndDelivery from "./ItemsAndDelivery";
import OrderSummary from "./OrderSummary";
import PaymentModes from "./paymant_modes/PaymentModes";

const Checkout = () => {
    return (
        <section className="section-checkout container">
            <div className="primary-heading margin-bottom-huge">Checkout</div>
            <div className="checkout-details-p-summary">
                <div className="checkout-details">
                    <DeliveryAddressList />
                    <PaymentModes />
                    <ItemsAndDelivery />
                </div>
                <OrderSummary />
            </div>
        </section>
    );
};

export default Checkout;

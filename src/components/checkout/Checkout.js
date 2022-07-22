import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";
import PaymentModes from "./paymant_modes/PaymentModes";

const Checkout = () => {
    return (
        <div className="checkout-details">
            <DeliveryAddress />
            <PaymentModes />
            <OrderSummary />
        </div>
    );
};

export default Checkout;

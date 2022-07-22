import DeliveryAddress from "./DeliveryAddress";
import PaymentModes from "./paymant_modes/PaymentModes";

const Checkout = () => {
    return (
        <div className="checkout-details">
            <DeliveryAddress />
            <PaymentModes />
        </div>
    );
};

export default Checkout;

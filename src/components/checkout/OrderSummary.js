import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CheckoutContext } from "../../contexts/checkoutContext";

const OrderSummary = ({ cartTotalAmount }) => {
    const {
        deliveryAmount,
        couponAmount,
        orderTotalAmount,
        calculateDeliveryAmount,
        calculateCouponAmount,
        calculateOrderTotalAmount,
    } = useContext(CheckoutContext);

    const applyCoupon = () => {
        calculateCouponAmount(0.03 * cartTotalAmount);
    };

    useEffect(() => {
        calculateDeliveryAmount(cartTotalAmount);
    }, []);

    useEffect(() => {
        calculateOrderTotalAmount(cartTotalAmount);
    }, [deliveryAmount, couponAmount]);

    return (
        <section className="section-order-summary">
            <div className="secondary-heading p-center-text">Order Summary</div>
            <div className="order-summary__charges">
                <div className="order-summary__charges--item-charges">
                    <span>Items</span>
                    <span>Rs. {cartTotalAmount}.00</span>
                </div>
                <div className="order-summary__charges--delivery-charges">
                    <span>Delivery</span>
                    <span>Rs. {deliveryAmount}</span>
                </div>
            </div>
            <div className="order-summary__coupon">
                <div>Apply a coupon</div>
                <input type="text" />
                <span className="btn btn-apply-coupon" onClick={applyCoupon}>
                    Apply
                </span>
            </div>
            <div className="order-summary__order-total">
                <span>Order Total</span>
                <span>Rs. {orderTotalAmount.toFixed(2)}</span>
            </div>
            <Link to="/payment_progress">
                <div className="btn-proceed-to-pay">Proceed to Pay</div>
            </Link>
        </section>
    );
};

export default OrderSummary;

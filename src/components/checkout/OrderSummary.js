import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { CheckoutContext } from "../../contexts/checkoutContext";
import { CustomerContext } from "../../contexts/customerContext";
import { OrdersContext } from "../../contexts/ordersContext";

const OrderSummary = ({ cartProducts, cartTotalAmount, emptyCart }) => {
    const {
        deliveryAmount,
        couponAmount,
        orderTotalAmount,
        calculateDeliveryAmount,
        calculateCouponAmount,
        calculateOrderTotalAmount,
    } = useContext(CheckoutContext);

    const { createOrder } = useContext(OrdersContext);
    const { selectedAddress, selectedPayment } = useContext(CustomerContext);

    const applyCoupon = () => {
        calculateCouponAmount(0.03 * cartTotalAmount);
    };

    const placeOrder = () => {
        createOrder(cartProducts, orderTotalAmount, couponAmount, { selectedAddress, selectedPayment });
        emptyCart();
    };

    useEffect(() => {
        calculateDeliveryAmount(cartTotalAmount);
        if (couponAmount) {
            applyCoupon();
        }
    }, [cartTotalAmount]);

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
                <div>Apply a coupon {couponAmount ? ` (applied already) ` : ""}</div>
                <input type="text" />
                <span className="btn btn-apply-coupon" onClick={applyCoupon}>
                    Apply
                </span>
            </div>
            <div className="order-summary__order-total">
                <span>Order Total</span>
                <span>Rs. {orderTotalAmount.toFixed(2)}</span>
            </div>
            {/* <Link to="/returns_orders"> */}
            {selectedAddress != null && selectedPayment.paymentMode !== "" ? (
                <div className="btn-proceed-to-pay" onClick={placeOrder}>
                    Proceed to Pay
                </div>
            ) : null}

            {/* </Link> */}
        </section>
    );
};

export default OrderSummary;

const OrderSummary = () => {
    return (
        <section className="section-order-summary">
            <div className="secondary-heading p-center-text">Order Summary</div>
            <div className="order-summary__charges">
                <div className="order-summary__charges--item-charges">
                    <span>Items</span>
                    <span>Rs. 998.00</span>
                </div>
                <div className="order-summary__charges--delivery-charges">
                    <span>Delivery</span>
                    <span>Rs. 50.00</span>
                </div>
            </div>
            <div className="order-summary__coupon">
                <div>Apply a coupon</div>
                <input type="text" />
                <span className="btn btn-apply-coupon">Apply</span>
            </div>
            <div className="order-summary__order-total">
                <span>Order Total</span>
                <span>Rs. 1048.00</span>
            </div>
            <div className="btn-proceed-to-pay">Proceed to Pay</div>
        </section>
    );
};

export default OrderSummary;

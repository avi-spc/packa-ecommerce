const LifetimeSavings = () => {
    return (
        <section className="section-lifetime-savings">
            <div className="secondary-heading p-center-text">Lifetime Savings</div>
            <div className="order-summary__charges">
                <div className="order-summary__charges--item-charges">
                    <span>Coupons</span>
                    <span>Rs. 50.00</span>
                </div>
                <div className="order-summary__charges--delivery-charges">
                    <span>Offers</span>
                    <span>Rs. 201.00</span>
                </div>
            </div>
            <div className="order-summary__order-total">
                <span>Total Savings</span>
                <span>Rs. 251.00</span>
            </div>
        </section>
    );
};

export default LifetimeSavings;

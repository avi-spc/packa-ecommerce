const LifetimeSavings = ({ savings }) => {
    return (
        <section className="section-lifetime-savings">
            <div className="secondary-heading p-center-text">Lifetime Savings</div>
            <div className="order-summary__charges">
                <div className="order-summary__charges--item-charges">
                    <span>Coupons</span>
                    <span>Rs. {savings.coupons.toFixed(2)}</span>
                </div>
                <div className="order-summary__charges--delivery-charges">
                    <span>Offers</span>
                    <span>Rs. {savings.offers.toFixed(2)}</span>
                </div>
            </div>
            <div className="order-summary__order-total">
                <span>Total Savings</span>
                <span>Rs. {(savings.coupons + savings.offers).toFixed(2)}</span>
            </div>
        </section>
    );
};

export default LifetimeSavings;

const IndividualItem = () => {
    return (
        <div className="individual-item">
            <div className="individual-item__details-m-price">
                <div className="individual-item__image"></div>
                <div className="individual-item__details">
                    <div className="secondary-heading">
                        Hazelnut Instant Coffee 100g
                    </div>
                    <div className="individual-item__quantity">Qty : : 3</div>
                    <div className="individual-item__amount">Rs. 998.00</div>
                </div>
            </div>
            <div className="product-card__eta">
                <img src="/images/icons/delivery_icon.svg" alt="" />
                <span>Free delivery by Fri, July 22</span>
            </div>
        </div>
    );
};

export default IndividualItem;

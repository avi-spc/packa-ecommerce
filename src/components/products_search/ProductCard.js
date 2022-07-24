const ProductCard = () => {
    return (
        <div className="product-card">
            {/* <img src="" alt="" className="product-card__product-image" /> */}
            <div className="product-card__product-image">
                <span className="sale-tag">sale</span>
            </div>
            <div className="product-card__product-details">
                <div className="product-card__name">
                    Hazelnut Instant Coffee 100g
                </div>
                <div className="product-card__rating rating-bar rating-bar__small">
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                </div>
                <div className="product-card__price">Rs. 499 :: 73% Off</div>
                <div className="product-card__eta">
                    <img src="/images/icons/delivery_icon.svg" alt="" />
                    <span>Free delivery by Fri, July 22</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;

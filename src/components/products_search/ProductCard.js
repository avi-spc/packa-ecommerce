const ProductCard = () => {
  return (
    <div className="product-card">
      {/* <img src="" alt="" className="product-card__product-image" /> */}
      <div className="product-card__product-image">
        <span className="sale-tag">sale</span>
      </div>
      <div className="product-card__product-details">
        <div className="product-title">Hazelnut Instant Coffee 100g</div>
        <div className="product-rating">•••••</div>
        <div className="product-price">Rs. 499 :: 73% Off</div>
        <div className="product-expected-delivery">
          <img src="/images/icons/delivery_icon.svg" alt="" />
          <span>Free delivery by Fri, July 22</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

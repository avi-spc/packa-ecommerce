const PriceTag = (props) => {
    return (
        <div className={`price-tag price-tag__${props.variant}`}>
            <div className="price-tag__price">Rs. {props.priceValue}</div>
            <div className={`price-tag__${props.variant}--discount`}>: : {props.discountValue}% off</div>
        </div>
    )
};

export default PriceTag;
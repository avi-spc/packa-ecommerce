const PriceTag = (props) => {
    return (
        <div className={`price-tag price-tag__${props.variant}`}>
            <div className="price-tag__price">Rs.499</div>
            <div className={`price-tag price-tag__${props.variant}--discount`}>: : 73% off</div>
        </div>
    )
};

export default PriceTag;
const PriceTag = (props) => {
    return (
        <div className={`price-tag ${props.variant}`}>
            <div className="price">Rs.499</div>
            <div className="discount">: : 73% off</div>
        </div>
    )
};

export default PriceTag;
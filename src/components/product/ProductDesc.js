const ProductDesc = ({ description }) => {
    return (
        <div className="product-description">
            <div className="secondary-heading">Description</div>
            <p>{description}</p>
        </div>
    );
};

export default ProductDesc;

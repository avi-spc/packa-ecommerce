import SecondaryButton from "../buttons/SecondaryButton";

const OrderProduct = () => {
    return (
        <div className="order-product">
            <div className="order-product__product-image"></div>
            <div className="order-product__product-details">
                <div className="product-name tertiary-heading">Hazelnut Instant Coffee 100g</div>
                <SecondaryButton name="Buy Again" />
            </div>
        </div>
    );
}
 
export default OrderProduct;
import CartProductBtn from "../buttons/CartProductBtn";

const OrderProduct = () => {
    return (
        <div className="order-product">
            <div className="order-product__product-image"></div>
            <div className="order-product__product-details">
                <div className="product-name tertiary-heading">Hazelnut Instant Coffee 100g</div>
                <CartProductBtn name="Buy Again" />
            </div>
        </div>
    );
}
 
export default OrderProduct;
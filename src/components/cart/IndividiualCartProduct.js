import CardProductBtn from "../buttons/CartProductBtn";
import QuantityCounter from "../product/QuantityCounter";

const IndividualCartProduct = () => {
    return (
        <div className="cart-product">
            <div className="cart-product__details-m-price">
                <input type="checkbox" />
                <div className="cart-product__image"></div>
                <div className="cart-product__details">
                    <div className="secondary-heading">
                        Hazelnut Instant Coffee 100g
                    </div>
                    <QuantityCounter variant="small" />
                    <div className="cart-product__action-buttons">
                        <CardProductBtn name="Save for later" />
                        <CardProductBtn name="Delete" />
                    </div>
                </div>
            </div>
            <div className="secondary-heading">Rs. 499</div>
        </div>
    );
};

export default IndividualCartProduct;

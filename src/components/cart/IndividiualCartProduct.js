import { useContext } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import QuantityCounter from "../product/QuantityCounter";
import { CartContext } from "../../contexts/cartContext";

const IndividualCartProduct = ({ cartProduct }) => {
    const { removeProductFromCart, addProductToSavedForLater } = useContext(CartContext);

    return (
        <div className="cart-product">
            <div className="cart-product__details-m-price">
                {/* <input type="checkbox" /> */}
                <div className="cart-product__image"></div>
                <div className="cart-product__details">
                    <div className="secondary-heading">{cartProduct.name}</div>
                    <QuantityCounter variant="small" quantity={cartProduct.quantity} productID={cartProduct.id} />
                    <div className="cart-product__action-buttons">
                        <SecondaryButton
                            name="Save for later"
                            action={addProductToSavedForLater}
                            actionPayload={{ payload: cartProduct.id }}
                        />
                        <SecondaryButton
                            name="Delete"
                            action={removeProductFromCart}
                            actionPayload={{ payload: cartProduct.id }}
                        />
                    </div>
                </div>
            </div>
            <div className="secondary-heading">Rs. {cartProduct.amount}.00</div>
        </div>
    );
};

export default IndividualCartProduct;

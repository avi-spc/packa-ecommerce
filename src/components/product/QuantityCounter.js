import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const QuantityCounter = (props) => {
    const { variant, quantity, changeQuantity, productID } = props;
    const { changeCartTotalQuantity, changeCartProductQuantity } = useContext(CartContext);

    const handleQuantityChange = (changeAmount) => {
        if (variant === "big") {
            changeQuantity(quantity + changeAmount);
        } else {
            changeCartTotalQuantity(changeAmount);
            changeCartProductQuantity(productID, quantity + changeAmount);
        }
    };

    return (
        <div className={`quantity ${variant}`}>
            <div>Quantity</div>
            <div className="quantity-counter">
                <div className="counter-controls">
                    <div className="decrement" onClick={() => handleQuantityChange(-1)}>
                        -
                    </div>
                    <div className="quantity-number">{quantity}</div>
                    <div className="increment" onClick={() => handleQuantityChange(1)}>
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantityCounter;

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const PriamryButton = (props) => {
    const { product } = props;

    const { cartTotalItems, addItemToCart, changeCartTotalItems } =
        useContext(CartContext);

    const addProductToCart = () => {
        if (product.quantity > 0) {
            addItemToCart(product);
            changeCartTotalItems(cartTotalItems + product.quantity);
        }
    };

    return (
        <div className="btn btn__primary" onClick={addProductToCart}>
            {props.name}
        </div>
    );
};

export default PriamryButton;

import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const PriamryButton = (props) => {
    const { product } = props;

    const { addProductToCart, changeCartTotalQuantity } = useContext(CartContext);

    const addProductBatchToCart = () => {
        if (product.quantity > 0) {
            addProductToCart(product);
            changeCartTotalQuantity(product.quantity);
        }
    };

    return (
        <div className="btn btn__primary" onClick={addProductBatchToCart}>
            {props.name}
        </div>
    );
};

export default PriamryButton;

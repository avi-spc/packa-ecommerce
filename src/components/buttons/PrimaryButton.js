import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const PrimaryButton = (props) => {
    const { product } = props;

    const { addProductToCart } = useContext(CartContext);

    return (
        <div
            className="btn btn__primary"
            onClick={() => {
                addProductToCart(product);
            }}
        >
            {props.name}
        </div>
    );
};

export default PrimaryButton;

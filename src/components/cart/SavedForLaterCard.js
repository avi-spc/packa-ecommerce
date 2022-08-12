import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import SecondaryButton from "../buttons/SecondaryButton";

const SavedForLaterCard = ({ product }) => {
    const { addProductToCart, removeProductFromSavedForLater } = useContext(CartContext);

    const moveProductToCart = (product) => {
        addProductToCart(product);
        removeProductFromSavedForLater(product.id);
    };

    return (
        // <Link to={`/products/${product.id}`}>
        <div className="product-card">
            {/* <img src="" alt="" className="product-card__product-image" /> */}
            <div className="product-card__product-image">{/* <span className="sale-tag">sale</span> */}</div>
            <div className="product-card__product-details">
                <div className="product-card__name">{product.name}</div>
                <div className="product-card__rating rating-bar rating-bar__small">
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined positive">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                    <span className="material-symbols-outlined negative">circle</span>
                </div>
                <div className="product-card__price">
                    Rs. {product.rate} :: {product.discount}%
                </div>
                <SecondaryButton name="Move To Cart" action={moveProductToCart} actionPayload={{ payload: product }} />
                <SecondaryButton
                    name="Delete"
                    action={removeProductFromSavedForLater}
                    actionPayload={{ payload: product.id }}
                />
            </div>
        </div>
        // </Link>
    );
};

export default SavedForLaterCard;

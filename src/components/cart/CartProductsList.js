import IndividualCartProduct from "./IndividiualCartProduct";

const CartProductsList = () => {
    return (
        <div className="shopping-cart__products-list">
            <IndividualCartProduct />
            <IndividualCartProduct />
        </div>
    );
};

export default CartProductsList;

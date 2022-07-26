import IndividualCartProduct from "./IndividiualCartProduct";

const CartProductsList = ({ cartProducts }) => {
    return (
        <div className="shopping-cart__products-list">
            {cartProducts.map((cartProduct) => {
                return <IndividualCartProduct cartProduct={cartProduct} key={cartProduct.id} />;
            })}
        </div>
    );
};

export default CartProductsList;

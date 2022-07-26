import IndividualCartProduct from "./IndividiualCartProduct";

const CartProductsList = ({ cartProducts }) => {
    return (
        <div className="shopping-cart__products-list">
            {cartProducts.length ? (
                cartProducts.map((cartProduct) => {
                    return <IndividualCartProduct cartProduct={cartProduct} key={cartProduct.id} />;
                })
            ) : (
                <div className="empty-list-msg">No items in your cart</div>
            )}
        </div>
    );
};

export default CartProductsList;

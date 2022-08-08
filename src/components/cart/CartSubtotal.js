const CartSubtotal = ({ cartTotalAmount, cartProductsCount }) => {
    return (
        <div className="cart-subtotal">
            <div>Subtotal ( {cartProductsCount} items ) : :</div>
            <span className="secondary-heading"> Rs. {cartTotalAmount}.00</span>
        </div>
    );
};

export default CartSubtotal;

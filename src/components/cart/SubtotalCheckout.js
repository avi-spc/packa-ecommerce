import { Link } from "react-router-dom";

import PriceTag from "../product/PriceTag";

const SubtotalCheckout = ({ cartProductsCount, cartTotalAmount }) => {
    return (
        <section className="subtotal-checkout">
            <div>{`Subtotal ( ${cartProductsCount} items )`}</div>
            <PriceTag variant="subtotal" priceValue={cartTotalAmount} />
            {cartProductsCount ? (
                <Link to="/checkout" className="btn btn__secondary">
                    Checkout
                </Link>
            ) : null}
        </section>
    );
};

export default SubtotalCheckout;

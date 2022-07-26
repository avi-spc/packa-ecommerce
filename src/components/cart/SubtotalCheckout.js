import SecondaryButton from "../buttons/SecondaryButton";
import PriceTag from "../product/PriceTag";

const SubtotalCheckout = ({ cartProductsCount, cartTotalAmount }) => {
    return (
        <section className="subtotal-checkout">
            <div>{`Subtotal ( ${cartProductsCount} items )`}</div>
            <PriceTag variant="subtotal" priceValue={cartTotalAmount} />
            <SecondaryButton name="Checkout" />
        </section>
    );
};

export default SubtotalCheckout;

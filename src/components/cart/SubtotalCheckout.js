import CardProductBtn from "../buttons/CartProductBtn";
import PriceTag from "../product/PriceTag";

const SubtotalCheckout = () => {
    return (
        <section className="subtotal-checkout">
            <div>{`Subtotal ( 2 items )`}</div>
            <PriceTag variant="subtotal" />
            <CardProductBtn name="Checkout" />
        </section>
    );
};

export default SubtotalCheckout;

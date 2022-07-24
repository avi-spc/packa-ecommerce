import SecondaryButton from "../buttons/SecondaryButton";
import PriceTag from "../product/PriceTag";

const SubtotalCheckout = () => {
    return (
        <section className="subtotal-checkout">
            <div>{`Subtotal ( 2 items )`}</div>
            <PriceTag variant="subtotal" />
            <SecondaryButton name="Checkout" />
        </section>
    );
};

export default SubtotalCheckout;

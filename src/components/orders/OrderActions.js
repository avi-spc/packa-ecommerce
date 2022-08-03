import TertiaryButton from "../buttons/TertiaryButton";

const OrderActions = () => {
    return (
        <div className="order-actions">
            <TertiaryButton name="Track Package" />
            <TertiaryButton name="Cancel Order" />
            <TertiaryButton name="Invoice" />
        </div>
    );
};

export default OrderActions;

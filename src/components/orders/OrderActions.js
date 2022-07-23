import CardProductBtn from "../buttons/CartProductBtn";

const OrderActions = () => {
    return (
        <div className="order-actions">
            <div className="order-actions__btn btn-track-cta">Track Package</div>
            <div className="order-actions__btn btn-cancel-return-cta">Cancel Order</div>
            <div className="order-actions__btn btn-invoice-cta">Invoice</div>
        </div>
    );
}
 
export default OrderActions;
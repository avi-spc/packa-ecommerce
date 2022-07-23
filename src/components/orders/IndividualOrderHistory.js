import OrderActions from "./OrderActions";
import OrderProduct from "./OrderProduct";

const IndividualOrderHistory = () => {
    return (
        <div className="orders-history__individual">
            <div className="secondary-heading">Delivery by 20 July 2022</div>
            <div className="order-products-list">
                <div>
                    <OrderProduct />
                    <OrderProduct />
                </div>
                <OrderActions />
            </div>
        </div>
    );
};

export default IndividualOrderHistory;

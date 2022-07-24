import OrderMeta from "./OrderMeta";
import IndividualOrderHistory from "./IndividualOrderHistory";
import LifetimeSavings from "./LifetimeSavings";

const OrdersHistory = () => {
    return (
        <section className="section-orders-history container">
            <div className="primary-heading margin-bottom-huge">Your Orders</div>
            <div className="orders-history-plus-savings">
                <div className="orders-history">
                    <div>
                        <OrderMeta />
                        <IndividualOrderHistory />
                    </div>
                    <div>
                        <OrderMeta />
                        <IndividualOrderHistory />
                    </div>
                </div>
                <LifetimeSavings />
            </div>
        </section>
    );
};

export default OrdersHistory;

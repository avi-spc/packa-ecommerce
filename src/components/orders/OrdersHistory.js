import { useContext, useEffect } from "react";

import OrderMeta from "./OrderMeta";
import IndividualOrderHistory from "./IndividualOrderHistory";
import LifetimeSavings from "./LifetimeSavings";
import { OrdersContext } from "../../contexts/ordersContext";

const OrdersHistory = () => {
    const { orders } = useContext(OrdersContext);

    return (
        <section className="section-orders-history container">
            <div className="primary-heading margin-bottom-huge">Your Orders</div>
            <div className="orders-history-plus-savings">
                <div className="orders-history">
                    {orders.length ? (
                        orders.map((order) => {
                            return (
                                <div key={order.meta.id}>
                                    <OrderMeta orderMeta={order.meta} />
                                    <IndividualOrderHistory
                                        orderedProducts={order.orderedProducts}
                                        deliveryDate={order.meta.deliveryDate}
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <div className="empty-list-msg">You have no order history</div>
                    )}
                </div>
                <LifetimeSavings />
            </div>
        </section>
    );
};

export default OrdersHistory;

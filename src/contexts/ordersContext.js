import { createContext, useState } from "react";
const generateUniqueId = require("generate-unique-id");

export const OrdersContext = createContext();

const OrdersContextProvider = (props) => {
    const [orders, setOrders] = useState([]);
    const [savings, setSavings] = useState({
        coupons: 0,
        offers: 0,
    });

    const createOrder = (orderSet, orderTotal, orderSavings, customerDetails) => {
        const generateOrderId = () => {
            let uid = generateUniqueId({
                length: 17,
                useLetters: false,
            });

            let orderID = "# " + uid.substring(0, 3) + "-" + uid.substring(3, 10) + "-" + uid.substring(10, uid.length);

            return orderID;
        };

        const newOrder = {
            meta: {
                id: generateOrderId(),
                placedDate: new Date().toDateString().slice(4),
                deliveryDate: new Date(Date.now() + 604800000).toDateString().slice(4),
                amount: orderTotal,
                customerName: customerDetails.selectedAddress.customerName,
                customerAddress: customerDetails.selectedAddress.customerAddress,
                paymentMode: customerDetails.selectedPayment.paymentMethod,
            },
            orderedProducts: orderSet,
        };

        setSavings({ coupons: savings.coupons + orderSavings, offers: 0 });
        setOrders([...orders, newOrder]);
    };

    return <OrdersContext.Provider value={{ orders, savings, createOrder }}>{props.children}</OrdersContext.Provider>;
};

export default OrdersContextProvider;

import { createContext, useState } from "react";
const generateUniqueId = require("generate-unique-id");

export const OrdersContext = createContext();

const OrdersContextProvider = (props) => {
    const [orders, setOrders] = useState([]);

    const createOrder = (orderSet, orderTotal) => {
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
                customerName: "Konami Grenger",
            },
            orderedProducts: orderSet,
        };

        setOrders([...orders, newOrder]);
    };

    return (
        <OrdersContext.Provider value={{ orders, createOrder }}>
            {props.children}
            {console.log(generateUniqueId())}
        </OrdersContext.Provider>
    );
};

export default OrdersContextProvider;

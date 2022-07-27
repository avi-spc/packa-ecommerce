import { createContext, useContext, useState } from "react";
import { CartContext } from "./cartContext";

export const CheckoutContext = createContext();

const CheckoutContextProvider = (props) => {
    const [deliveryAmount, setDeliveryAmount] = useState(0);
    const [couponAmount, setCouponAmount] = useState(0);
    const [orderTotalAmount, setOrderTotalAmount] = useState(0);

    const calculateDeliveryAmount = (cartTotalAmount) => {
        setDeliveryAmount(cartTotalAmount * 0.01);
    };

    const calculateCouponAmount = (couponAmount) => {
        console.log(couponAmount);
        setCouponAmount(couponAmount);
    };

    const calculateOrderTotalAmount = (cartTotalAmount) => {
        setOrderTotalAmount(cartTotalAmount + deliveryAmount - couponAmount);
    };

    const resetCheckout = () => {
        setDeliveryAmount(0);
        setCouponAmount(0);
    };

    return (
        <CheckoutContext.Provider
            value={{
                deliveryAmount,
                couponAmount,
                orderTotalAmount,
                calculateDeliveryAmount,
                calculateCouponAmount,
                calculateOrderTotalAmount,
                resetCheckout,
            }}
        >
            {props.children}
        </CheckoutContext.Provider>
    );
};

export default CheckoutContextProvider;

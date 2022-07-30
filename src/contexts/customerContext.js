import { createContext, useState } from "react";

import { AddressesStore } from "../store/addressesStore";

export const CustomerContext = createContext();

const CustomerContextProvider = (props) => {
    const [addresses] = useState(AddressesStore);
    const [selectedAddress, setSelectedAddress] = useState({});

    const [payment, setPayment] = useState({
        paymentMode: "",
        paymentPayload: {},
    });

    const selectDeliveryAddress = (deliveryAddressId) => {
        setSelectedAddress(
            addresses.find((address) => {
                return address.customerId === deliveryAddressId;
            })
        );
    };

    const selectPaymentMode = (paymentInfo) => {
        setPayment(paymentInfo);
    };

    return (
        <CustomerContext.Provider value={{ addresses, selectDeliveryAddress, selectPaymentMode }}>
            {props.children}
            {console.log("h")}
        </CustomerContext.Provider>
    );
};

export default CustomerContextProvider;

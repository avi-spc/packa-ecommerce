import { createContext, useState } from "react";

import { AddressesStore } from "../store/addressesStore";

export const CustomerContext = createContext();

const CustomerContextProvider = (props) => {
    const [addresses] = useState(AddressesStore);
    const [selectedAddress, setSelectedAddress] = useState(null);
    const [selectedPayment, setSelectedPayment] = useState({ paymentMode: "", paymentPayload: {} });

    const selectDeliveryAddress = (deliveryAddressId) => {
        setSelectedAddress(
            addresses.find((address) => {
                return address.customerId === deliveryAddressId;
            })
        );
    };

    const selectPaymentMode = (paymentDetails) => {
        setSelectedPayment(paymentDetails);
    };

    return (
        <CustomerContext.Provider
            value={{ addresses, selectedAddress, selectedPayment, selectDeliveryAddress, selectPaymentMode }}
        >
            {props.children}
        </CustomerContext.Provider>
    );
};

export default CustomerContextProvider;

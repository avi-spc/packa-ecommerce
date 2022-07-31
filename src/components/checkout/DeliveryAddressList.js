import { useContext } from "react";

import IndividualAddress from "./IndividualAddress";
import { CustomerContext } from "../../contexts/customerContext";
import RadioSelector from "./RadioSelector";

const DeliveryAddressList = () => {
    const { addresses, selectDeliveryAddress } = useContext(CustomerContext);

    const radioSelector = new RadioSelector();

    return (
        <section className="checkout-details__delivery-address-section">
            <div className="secondary-heading">Select a delivery address</div>
            <div className="checkout-details__address-list">
                {addresses.map((address, index) => {
                    return (
                        <IndividualAddress
                            address={address}
                            selectDeliveryAddress={selectDeliveryAddress}
                            radioSelector={radioSelector}
                            key={index}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default DeliveryAddressList;

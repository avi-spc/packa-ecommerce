import IndividualAddress from "./IndividualAddress";

const DeliveryAddressList = () => {
    return (
        <div className="checkout-details__delivery-address-section">
            <div className="secondary-heading">Select a delivery address</div>
            <div className="checkout-details__address-list">
                <IndividualAddress />
                <IndividualAddress />
            </div>
        </div>
    );
};

export default DeliveryAddressList;

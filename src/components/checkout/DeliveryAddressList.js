import IndividualAddress from "./IndividualAddress";

const DeliveryAddressList = () => {
    return (
        <section className="checkout-details__delivery-address-section">
            <div className="secondary-heading">Select a delivery address</div>
            <div className="checkout-details__address-list">
                <IndividualAddress />
                <IndividualAddress />
            </div>
        </section>
    );
};

export default DeliveryAddressList;

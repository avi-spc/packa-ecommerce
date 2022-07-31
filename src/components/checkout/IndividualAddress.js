import SecondaryButton from "../buttons/SecondaryButton";

const IndividualAddress = ({ address, selectDeliveryAddress, radioSelector }) => {
    return (
        <label htmlFor={address.customerName} className="individual-address">
            <div className="individual-address__address-m-btn">
                <input
                    type="radio"
                    id={address.customerName}
                    name="address-radio"
                    value={address.customerId}
                    onChange={(e) => {
                        selectDeliveryAddress(e.target.value);
                        radioSelector.paintSelectedStyle(e.target.name);
                    }}
                />
                <div className="individual-address__address-details">
                    <div className="tertiary-heading">{address.customerName}</div>
                    <div>{address.customerAddress}</div>
                    <div>Phone : : {address.customerPhone}</div>
                </div>
            </div>
            <SecondaryButton name="Edit Address" />
        </label>
    );
};

export default IndividualAddress;

import IndividualAddress from "./IndividualAddress";

const DeliveryAddress = () => {
  return (
    <div className="delivery-address">
      <div className="secondary-heading">Select a delivery address</div>
      <div className="meta-address">
        <IndividualAddress />
        <IndividualAddress />
      </div>
    </div>
  );
};

export default DeliveryAddress;

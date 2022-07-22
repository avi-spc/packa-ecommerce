import CardProductBtn from "../../buttons/CartProductBtn";

const UpiPayment = () => {
    return (
        <div className="payment-option payment-option--upi">
            <input type="radio" />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">
                    UPI Apps
                </div>
                <div className="payment-option__instruction payment-option__instruction--upi-id">
                    <div>Please enter your UPI ID</div>
                    <input type="text" />                   
                    <CardProductBtn name="Verify" />
                </div>
            </div>
        </div>
    );
};

export default UpiPayment;

import { useEffect, useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";

const UpiPayment = ({ createPaymentDetails }) => {
    const [upiId, setUpiId] = useState("");
    const [isUpiVerified, setIsUpiVerified] = useState(false);

    useEffect(() => {
        createPaymentDetails({
            paymentMethod: "UPI",
            paymentPayload: { upiId, isUpiVerified },
        });
    }, [upiId, isUpiVerified]);

    const setUpiVerification = () => {
        if (upiId === "avdhesh7394vn@ok") {
            setIsUpiVerified(true);
        } else {
            setIsUpiVerified(false);
        }
    };

    return (
        <label htmlFor="payment-radio-upi" className="payment-option payment-option--upi">
            <input
                type="radio"
                id="payment-radio-upi"
                name="payment-radio"
                value="UPI"
                onChange={(e) => createPaymentDetails({ paymentMethod: e.target.value, paymentPayload: {} })}
            />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">UPI Apps</div>
                <div className="payment-option__instruction payment-option__instruction--upi-id">
                    <div>Please enter your UPI ID</div>
                    <input type="text" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                    <SecondaryButton name="Verify" action={setUpiVerification} actionPayload={{}} />
                </div>
            </div>
        </label>
    );
};

export default UpiPayment;

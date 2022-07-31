import { useEffect, useState } from "react";

const PodPayment = ({ createPaymentDetails, radioSelector }) => {
    const [paymentMode, setPaymentMode] = useState("");

    useEffect(() => {
        createPaymentDetails({ paymentMode: "POD", paymentPayload: {} });
    }, [paymentMode]);

    return (
        <label htmlFor="payment-radio-pod" className="payment-option payment-option--pod">
            <input
                type="radio"
                id="payment-radio-pod"
                name="payment-radio"
                value="POD"
                onChange={(e) => {
                    createPaymentDetails({ paymentMode: e.target.value, paymentPayload: {} });
                    radioSelector.paintSelectedStyle(e.target.name);
                }}
            />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">Pay On Delivery</div>
            </div>
        </label>
    );
};

export default PodPayment;

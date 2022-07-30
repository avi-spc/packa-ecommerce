import { useEffect, useState } from "react";

const PodPayment = ({ p }) => {
    const [paymentMode, setPaymentMode] = useState("");

    useEffect(() => {
        p({ paymentMethod: "POD", paymentPayload: {} });
    }, [paymentMode]);

    return (
        <label htmlFor="payment-radio-pod" className="payment-option payment-option--pod">
            <input
                type="radio"
                id="payment-radio-pod"
                name="payment-radio"
                value="POD"
                onChange={(e) => p({ paymentMethod: e.target.value, paymentPayload: {} })}
            />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">Pay On Delivery</div>
            </div>
        </label>
    );
};

export default PodPayment;

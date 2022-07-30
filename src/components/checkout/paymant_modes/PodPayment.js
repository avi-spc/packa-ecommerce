import { useEffect, useState } from "react";

const PodPayment = ({ p }) => {
    const [paymentMode, setPaymentMode] = useState("");

    useEffect(() => {
        p({ paymentMethod: "POD", paymentPayload: {} });
    }, [paymentMode]);

    return (
        <div className="payment-option payment-option--pod">
            <input
                type="radio"
                name="payment-radio"
                value="POD"
                onChange={(e) => p({ paymentMethod: e.target.value, paymentPayload: {} })}
            />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">Pay On Delivery</div>
            </div>
        </div>
    );
};

export default PodPayment;

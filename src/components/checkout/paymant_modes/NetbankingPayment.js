import { useEffect, useState } from "react";

const NetbankingPayment = ({ createPaymentDetails, radioSelector }) => {
    const [bankName, setBankName] = useState("");

    useEffect(() => {
        createPaymentDetails({
            paymentMode: "Netbanking",
            paymentPayload: { bankName },
        });
    }, [bankName]);

    return (
        <label htmlFor="payment-radio-netbanking" className="payment-option payment-option--netbanking">
            <input
                type="radio"
                id="payment-radio-netbanking"
                name="payment-radio"
                value="Netbanking"
                onChange={(e) => {
                    createPaymentDetails({ paymentMode: e.target.value, paymentPayload: {} });
                    radioSelector.paintSelectedStyle(e.target.name);
                }}
            />
            <div className="icon-radio" />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">Netbanking</div>
                <div className="payment-option__instruction payment-option__instruction--bank-name">
                    <select value={bankName} onChange={(e) => setBankName(e.target.value)}>
                        <option value="">Choose an option</option>
                        <option value="SBI">SBI</option>
                        <option value="HDFC">HDFC</option>
                        <option value="ICICI">ICICI</option>
                    </select>
                </div>
            </div>
        </label>
    );
};

export default NetbankingPayment;

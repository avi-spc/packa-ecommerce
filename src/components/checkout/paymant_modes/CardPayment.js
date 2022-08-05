import { useEffect, useState } from "react";

const CardPayment = ({ createPaymentDetails, radioSelector }) => {
    const [cardNumber, setCardNumber] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const [expiryDate, setExpiryDate] = useState({ month: 0, year: 0 });

    useEffect(() => {
        createPaymentDetails({
            paymentMode: "Card",
            paymentPayload: { cardNumber, nameOnCard, expiryDate },
        });
    }, [cardNumber, nameOnCard, expiryDate]);

    return (
        <label htmlFor="payment-radio-card" className="payment-option payment-option--card">
            <input
                type="radio"
                id="payment-radio-card"
                name="payment-radio"
                value="Card"
                onChange={(e) => {
                    createPaymentDetails({ paymentMode: e.target.value, paymentPayload: {} });
                    radioSelector.paintSelectedStyle(e.target.name);
                }}
            />
            <div className="icon-radio" />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">Debit // Credit // ATM Card</div>
                <div className="payment-option__heading-m-details">
                    <div className="payment-option__instruction payment-option__instruction--name">
                        <label>Card Number</label>
                        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    </div>
                    <div className="payment-option__instruction payment-option__instruction--number">
                        <label>Name on Card</label>
                        <input type="text" value={nameOnCard} onChange={(e) => setNameOnCard(e.target.value)} />
                    </div>
                    <div className="payment-option__instruction payment-option__instruction--expiry">
                        <label>Expiry Date</label>
                        <div>
                            <select
                                name="month-dropdown"
                                onChange={(e) => setExpiryDate({ ...expiryDate, month: e.target.value })}
                            >
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                            </select>
                            <select
                                name="year-dropdown"
                                onChange={(e) => setExpiryDate({ ...expiryDate, year: e.target.value })}
                            >
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </label>
    );
};

export default CardPayment;

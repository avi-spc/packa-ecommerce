const CardPayment = () => {
    return (
        <div className="payment-option payment-option--card">
            <input type="radio" />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">
                    Debit // Credit // ATM Card
                </div>
                <div className="payment-option__instruction payment-option__instruction--name">
                    <label>Card Number</label>
                    <input type="text" />
                </div>
                <div className="payment-option__instruction payment-option__instruction--number">
                    <label>Name on Card</label>
                    <input type="text" />
                </div>
                <div className="payment-option__instruction payment-option__instruction--expiry">
                    <label>Expiry Date</label>
                    <div>
                        <select>
                            <option value="">01</option>
                            <option value="">02</option>
                            <option value="">03</option>
                            <option value="">04</option>
                        </select>
                        <select>
                            <option value="">2021</option>
                            <option value="">2022</option>
                            <option value="">2023</option>
                            <option value="">2024</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPayment;

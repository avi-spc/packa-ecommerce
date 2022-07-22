const NetbankingPayment = () => {
    return (
        <div className="payment-option payment-option--netbanking">
            <input type="radio" />
            <div className="payment-option__details">
                <div className="payment-option__heading tertiary-heading">
                    Netbanking
                </div>
                <div className="payment-option__instruction payment-option__instruction--bank-name">
                    <select>
                        <option value="">Choose an option</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default NetbankingPayment;

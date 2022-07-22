import CardProductBtn from "../buttons/CartProductBtn";

const IndividualAddress = () => {
    return (
        <div className="individual-address">
            <div className="address">
                <input type="radio" />
                <div className="address-details">
                    <div className="tertiary-heading">Akhilesh Kumar Yadav</div>
                    <div>
                        7/394, Vikas Nagar, LUCKNOW, UTTAR PRADESH, 226022,
                        India
                    </div>
                    <div>Phone : : 6666667766</div>
                </div>
            </div>
            <CardProductBtn name="Edit Address" />
        </div>
    );
};

export default IndividualAddress;

import SecondaryButton from "../buttons/SecondaryButton";

const IndividualAddress = () => {
    return (
        <div className="individual-address">
            <div className="individual-address__address-m-btn">
                <input type="radio" />
                <div className="individual-address__address-details">
                    <div className="tertiary-heading">Akhilesh Kumar Yadav</div>
                    <div>
                        7/394, Vikas Nagar, LUCKNOW, UTTAR PRADESH, 226022,
                        India
                    </div>
                    <div>Phone : : 6666667766</div>
                </div>
            </div>
            <SecondaryButton name="Edit Address" />
        </div>
    );
};

export default IndividualAddress;

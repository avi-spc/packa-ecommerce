import { useContext, useState } from "react";

import CardPayment from "./CardPayment";
import NetbankingPayment from "./NetbankingPayment";
import UpiPayment from "./UpiPayment";
import PodPayment from "./PodPayment";
import SecondaryButton from "../../buttons/SecondaryButton";
import { CustomerContext } from "../../../contexts/customerContext";

const PaymentModes = () => {
    const { selectPaymentMode } = useContext(CustomerContext);
    const [paymentDetails, setPaymentDetails] = useState({});

    const createPaymentDetails = (paymentObject) => {
        setPaymentDetails(paymentObject);
    };

    return (
        <section className="section-payment">
            <div className="secondary-heading">Select a payment method</div>
            <div className="payment-modes">
                <CardPayment createPaymentDetails={createPaymentDetails} />
                <NetbankingPayment createPaymentDetails={createPaymentDetails} />
                <UpiPayment createPaymentDetails={createPaymentDetails} />
                <PodPayment createPaymentDetails={createPaymentDetails} />
                <SecondaryButton
                    name="Use this Payment Method"
                    action={selectPaymentMode}
                    actionPayload={{ payload: paymentDetails }}
                />
            </div>
        </section>
    );
};

export default PaymentModes;

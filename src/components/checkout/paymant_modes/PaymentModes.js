import { useContext, useState } from "react";

import CardPayment from "./CardPayment";
import NetbankingPayment from "./NetbankingPayment";
import UpiPayment from "./UpiPayment";
import PodPayment from "./PodPayment";
import SecondaryButton from "../../buttons/SecondaryButton";
import { CustomerContext } from "../../../contexts/customerContext";

const PaymentModes = () => {
    const { selectPaymentMode } = useContext(CustomerContext);
    const [payload, setPayload] = useState({});

    const p = (paylodObject) => {
        setPayload(paylodObject);
    };

    return (
        <section className="section-payment">
            <div className="secondary-heading">Select a payemnt method</div>
            <div className="payment-modes">
                <CardPayment p={p} />
                <NetbankingPayment p={p} />
                <UpiPayment p={p} />
                <PodPayment p={p} />
                <SecondaryButton
                    name="Use this Payment Address"
                    action={selectPaymentMode}
                    actionPayload={{ productID: payload }}
                />
            </div>
        </section>
    );
};

export default PaymentModes;

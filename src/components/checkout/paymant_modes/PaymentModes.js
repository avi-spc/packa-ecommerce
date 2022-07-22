import CardPayment from "./CardPayment";
import NetbankingPayment from "./NetbankingPayment";
import PodPayment from "./PodPayment";
import UpiPayment from "./UpiPayment";

const PaymentModes = () => {
    return (
        <section className="section-payment">
            <div className="secondary-heading">Select a payemnt method</div>
            <div className="payment-modes">
                <CardPayment />
                <NetbankingPayment />
                <UpiPayment />
                <PodPayment />
            </div>
        </section>
    );
};

export default PaymentModes;

import { useEffect, useState } from "react";

const PaymentProgress = () => {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCounter((counter) => counter + 1);
    //     }, 1000);

    //     if (counter >= 5) {
    //         clearInterval(interval);
    //     }
    // }, []);

    return (
        <div className="section-payment-progress container">
            Payment Progress
            <div>{counter}</div>
        </div>
    );
};

export default PaymentProgress;

const OrderMeta = ({ orderMeta }) => {
    return (
        <div className="order-meta">
            <div className="order-meta__meta-type">
                <div>ORDER PLACED</div>
                <div>{orderMeta.placedDate}</div>
            </div>
            <div className="order-meta__meta-type">
                <div>TOTAL</div>
                <div>Rs. {orderMeta.amount.toFixed(2)}</div>
            </div>
            <div className="order-meta__meta-type">
                <div>SHIP TO</div>
                <div className="customer-meta">
                    {orderMeta.customerName}
                    <div className="customer-meta__address-p-payment">
                        <div className="customer-meta__address">Address : {orderMeta.customerAddress}</div>
                        <div className="customer-meta__payment-mode">Payment Mode : {orderMeta.paymentMode}</div>
                    </div>
                </div>
            </div>
            <div className="order-meta__meta-type">
                <div>ORDER ID</div>
                <div>{orderMeta.id}</div>
            </div>
        </div>
    );
};

export default OrderMeta;

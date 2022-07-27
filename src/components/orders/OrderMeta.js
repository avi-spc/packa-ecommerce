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
                <div>{orderMeta.customerName}</div>
            </div>
            <div className="order-meta__meta-type">
                <div>ORDER ID</div>
                <div>{orderMeta.id}</div>
            </div>
        </div>
    );
};

export default OrderMeta;

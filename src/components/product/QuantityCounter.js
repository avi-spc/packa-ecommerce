const QuantityCounter = (props) => {
    return (
        <div className={`quantity ${props.variant}`}>
            <div>Quantity</div>
            <div className="quantity-counter">
                <div className="counter-controls">
                    <div
                        className="decrement"
                        onClick={() => props.changeQuantity(props.quantity - 1)}
                    >
                        -
                    </div>
                    <div className="quantity-number">{props.quantity}</div>
                    <div
                        className="increment"
                        onClick={() => props.changeQuantity(props.quantity + 1)}
                    >
                        +
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuantityCounter;

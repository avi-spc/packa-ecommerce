const QuantityCounter = () => {
  return (
    <div className="quantity">
      <div>Quantity</div>
      <div className="quantity-counter">
        <div className="counter-controls">
          <div className="decrement">-</div>
          <div className="quantity-number">4</div>
          <div className="increment">+</div>
        </div>
      </div>
    </div>
  );
};

export default QuantityCounter;

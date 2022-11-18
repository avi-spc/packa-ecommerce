const IndividualItem = ({ cartProduct }) => {
	return (
		<div className="individual-item">
			<div className="individual-item__details-m-price">
				<div className="individual-item__image">
					<img src={cartProduct.image} alt="" />
				</div>
				<div className="individual-item__details">
					<div className="secondary-heading">{cartProduct.name}</div>
					<div className="individual-item__quantity">Qty : : {cartProduct.quantity}</div>
					<div className="individual-item__amount">Rs. {cartProduct.amount}.00</div>
				</div>
			</div>
			<div className="product-card__eta">
				<img src="/images/icons/delivery_icon.svg" alt="" />
				<span>Free delivery by {cartProduct.deliveryDate}</span>
			</div>
		</div>
	);
};

export default IndividualItem;

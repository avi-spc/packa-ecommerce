import SecondaryButton from '../buttons/SecondaryButton';

const OrderProduct = ({ product }) => {
	return (
		<div className="order-product">
			<div className="order-product__product-image">
				<img src={product.image} alt="" />
			</div>
			<div className="order-product__product-details">
				<div className="product-name tertiary-heading">{product.name}</div>
				<SecondaryButton name="Buy Again" />
			</div>
		</div>
	);
};

export default OrderProduct;

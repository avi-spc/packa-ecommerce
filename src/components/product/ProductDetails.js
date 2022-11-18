import { useContext, useEffect, useRef, useState } from 'react';

import QuantityCounter from './QuantityCounter';
import PriceTag from './PriceTag';
import ProductDesc from './ProductDesc';
import ProductOffers from './ProductOffers';
import PrimaryButton from '../buttons/PrimaryButton';

const ProductDetails = ({ product }) => {
	// const createRatingBar = () => {
	//     let ratingList = [];

	//     for (let i = 1; i <= 5; i++) {
	//         if (i <= Math.round(product.rating))
	//             ratingList.push(
	//                 <span className="material-symbols-outlined positive">
	//                     circle
	//                 </span>
	//             );
	//         else
	//             ratingList.push(
	//                 <span className="material-symbols-outlined negative">
	//                     circle
	//                 </span>
	//             );
	//     }

	//     return ratingList;
	// };

	const [quantity, setQuantity] = useState(1);
	const ratingBar = useRef();

	const changeQuantity = (newQuantity) => {
		if (!(newQuantity < 1)) {
			setQuantity(newQuantity);
		}
	};

	const cartProduct = {
		id: product.id,
		name: product.name,
		quantity: quantity,
		rate: product.rate,
		amount: quantity * product.rate,
		deliveryDate: product.eta,
		image: product.image
	};

	useEffect(() => {
		if (ratingBar) {
			for (let i = 0; i < 5; i++) {
				if (i <= Math.round(product.rating - 1)) {
					ratingBar.current.children[i].classList.add('positive');
				} else {
					ratingBar.current.children[i].classList.add('negative');
				}
			}
		}
	}, []);

	return (
		<div className="product-details">
			<div className="product-details__name primary-heading">{product.name}</div>
			<div className="product-details__brand-name secondary-heading">
				Brand : : {product.brand}
			</div>
			<div className="product-details__rating rating-bar rating-bar__small" ref={ratingBar}>
				<span className="material-symbols-outlined">circle</span>
				<span className="material-symbols-outlined">circle</span>
				<span className="material-symbols-outlined">circle</span>
				<span className="material-symbols-outlined">circle</span>
				<span className="material-symbols-outlined">circle</span>
			</div>
			<PriceTag
				variant="product"
				priceValue={product.rate}
				discountValue={product.discount}
			/>
			<QuantityCounter variant="big" quantity={quantity} changeQuantity={changeQuantity} />
			<PrimaryButton name="ADD TO CART" product={cartProduct} />
			<ProductDesc description={product.description} />
			<ProductOffers offers={product.offers} />
		</div>
	);
};

export default ProductDetails;

const ProductVisuals = ({ visual }) => {
	return (
		<div className="product-visuals">
			<div className="product-visuals__primary">
				<img src={visual} alt="" />
			</div>
			<div className="product-visuals__secondary">
				<div className="secondary-visual"></div>
				<div className="secondary-visual"></div>
				<div className="secondary-visual"></div>
				<div className="secondary-visual"></div>
			</div>
		</div>
	);
};

export default ProductVisuals;

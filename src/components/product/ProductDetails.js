import QuantityCounter from "./QuantityCounter";
import PriceTag from "./PriceTag";
import ProductDesc from "./ProductDesc";
import ProductOffers from "./ProductOffers";
import PriamryButton from "../buttons/PrimaryButton";

const ProductDetails = () => {
    return (
        <div className="product-details">
            <div className="product-details__name primary-heading">
                Hazelnut Instant Coffee 100g
            </div>
            <div className="product-details__brand-name secondary-heading">
                Brand : : Countrybean
            </div>
            <div className="product-details__rating rating-bar">
                <span className="material-symbols-outlined positive">circle</span>
                <span className="material-symbols-outlined positive">circle</span>
                <span className="material-symbols-outlined positive">circle</span>
                <span className="material-symbols-outlined negative">circle</span>
                <span className="material-symbols-outlined negative">circle</span>
            </div>
            <PriceTag variant="product" />
            <QuantityCounter variant="big" />
            <PriamryButton name="ADD TO CART" />
            <ProductDesc />
            <ProductOffers />
        </div>
    );
};

export default ProductDetails;

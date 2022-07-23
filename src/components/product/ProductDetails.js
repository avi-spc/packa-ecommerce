import AddToCart from "../buttons/AddToCart";
import QuantityCounter from "./QuantityCounter";
import PriceTag from "./PriceTag";
import ProductDesc from "./ProductDesc";
import ProductOffers from "./ProductOffers";

const ProductDetails = () => {
    return (
        <div className="product-details">
            <div className="product-details__name primary-heading">
                Hazelnut Instant Coffee 100g
            </div>
            <div className="product-details__brand-name secondary-heading">
                Brand : : Countrybean
            </div>
            <div className="product-details__rating primary-heading">•••••</div>
            <PriceTag varirant="product" />
            <QuantityCounter variant="big" />
            <AddToCart />
            <ProductDesc />
            <ProductOffers />
        </div>
    );
};

export default ProductDetails;

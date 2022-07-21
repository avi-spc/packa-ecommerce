import AddToCart from "../buttons/AddToCart";
import QuantityCounter from "./QuantityCounter";
import PriceTag from "./PriceTag";
import ProductDesc from "./ProductDesc";
import Offers from "./Offers";

const ProductDetails = () => {
  return (
    <div className="product-details">
      <div className="product-name primary-heading">Hazelnut Instant Coffee 100g</div>
      <div className="brand-name secondary-heading">Brand : : Countrybean</div>
      <div className="rating primary-heading">•••••</div>
      <PriceTag />
      <QuantityCounter />
      <AddToCart />
      <ProductDesc />
      <Offers />
    </div>
  );
};

export default ProductDetails;

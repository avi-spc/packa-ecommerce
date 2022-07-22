import CustomerReviews from "./CustomerReviews";
import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";

const Product = () => {
  return (
    <div className="product">
      <div className="current-product">
        <ProductVisuals />
        <ProductDetails />
      </div>
      <CustomerReviews />
    </div>
  );
};

export default Product;

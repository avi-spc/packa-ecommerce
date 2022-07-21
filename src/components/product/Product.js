import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";

const Product = () => {
  return (
    <div className="product">
      <ProductVisuals />
      <ProductDetails />
    </div>
  );
};

export default Product;

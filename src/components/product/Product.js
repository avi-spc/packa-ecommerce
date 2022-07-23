import CustomerReviews from "./CustomerReviews";
import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";

const Product = () => {
    return (
        <section className="product">
            <div className="product__visuals-p-details">
                <ProductVisuals />
                <ProductDetails />
            </div>
            <CustomerReviews />
        </section>
    );
};

export default Product;

import CustomerReviews from "./CustomerReviews";
import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";
import RelatedProducts from "./RelatedProducts";

const Product = () => {
    return (
        <section className="section-product container">
            <div className="product__visuals-p-details">
                <ProductVisuals />
                <ProductDetails />
            </div>
            <RelatedProducts />
            <CustomerReviews />
        </section>
    );
};

export default Product;

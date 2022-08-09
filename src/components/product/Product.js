import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductsContext } from "../../contexts/productsContext";

import ProductDetails from "./ProductDetails";
import ProductVisuals from "./ProductVisuals";
import RelatedProducts from "./RelatedProducts";
import CustomerReviews from "./CustomerReviews";

const Product = () => {
    const { product_id } = useParams();
    const { products } = useContext(ProductsContext);

    const product = products.find((product) => {
        return product.id == product_id;
    });

    return (
        <section className="section-product container">
            <div className="product__visuals-p-details">
                <ProductVisuals />
                <ProductDetails product={product} />
            </div>
            {/* <RelatedProducts /> */}
            {/* <CustomerReviews /> */}
        </section>
    );
};

export default Product;

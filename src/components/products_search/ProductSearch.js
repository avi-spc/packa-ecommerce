import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductSearch = () => {
    const { products, filteredProducts } = useContext(ProductsContext);

    return (
        <section className="section-product-search container">
            <div className="product-search__filter-p-grid">
                <ProductFilter />
                <div className="product-search__grid">
                    {filteredProducts.length
                        ? filteredProducts.map((product) => {
                              return <ProductCard product={product} key={product.id} />;
                          })
                        : products.map((product) => {
                              return <ProductCard product={product} key={product.id} />;
                          })}
                </div>
            </div>
        </section>
    );
};

export default ProductSearch;

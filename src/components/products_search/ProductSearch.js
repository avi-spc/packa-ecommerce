import { useContext } from "react";
import { ProductsContext } from "../../contexts/productsContext";

import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductSearch = () => {
    const { products, productsSearchCategory, filteredProducts } = useContext(ProductsContext);

    return (
        <section className="section-product-search container">
            <div className="product-search__search-count">
                {productsSearchCategory.length ? `${products.length} item(s) found for : : ` : null}
                <span>{productsSearchCategory}</span>
            </div>
            <div className="product-search__filter-p-grid">
                <ProductFilter />
                <div className="product-search__grid">
                    {filteredProducts.isFilterOn
                        ? filteredProducts.products.map((product) => {
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

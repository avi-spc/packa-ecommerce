import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";

const ProductSearch = () => {
    return (
        <section className="section-product-search">

            <div className="product-search__filter-p-grid">
                <ProductFilter />
                <div className="product-search__grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </section>
    );
};

export default ProductSearch;

import ProductCard from "../products_search/ProductCard";

const CartProductsLater = () => {
    return (
        <section className="section-products-later">
            <div className="primary-heading">Items saved for later</div>
            <div className="products-later__items">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </section>
    );
};

export default CartProductsLater;

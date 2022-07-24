import ProductCard from "../products_search/ProductCard";

const RelatedProducts = () => {
    return (
        <section className="related-products">
            <div className="primary-heading p-center-text">
                Related items you may like
            </div>
            <div className="related-products__arrows-p-items">
                <img src="/images/icons/arrow_circle_left.svg" alt="" />
                <div className="related-products__items">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
                <img src="/images/icons/arrow_circle_right.svg" alt="" />
            </div>
        </section>
    );
};

export default RelatedProducts;

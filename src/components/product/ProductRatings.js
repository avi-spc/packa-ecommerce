const ProductRatings = () => {
    return (
        <div className="product-rating">
            <div className="product-rating__average-rating">
                <div className="product-rating__average-p-rating-bar">
                    <div className="product-rating__rating rating-bar rating-bar__large">
                        <span className="material-symbols-outlined positive">circle</span>
                        <span className="material-symbols-outlined positive">circle</span>
                        <span className="material-symbols-outlined positive">circle</span>
                        <span className="material-symbols-outlined negative">circle</span>
                        <span className="material-symbols-outlined negative">circle</span>
                    </div>
                    <div className="product-rating__average-rating--primary">4.3 // 5</div>
                </div>
                <div className="product-rating__average-rating--secondary">: : 1511 ratings</div>
            </div>
            <div className="product-rating__levels">
                <div className="rating-levels--level-5">5</div>
                <div className="rating-levels--level-4">4</div>
                <div className="rating-levels--level-3">3</div>
                <div className="rating-levels--level-2">2</div>
                <div className="rating-levels--level-1">1</div>
            </div>
        </div>
    )
};

export default ProductRatings;
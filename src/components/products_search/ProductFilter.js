const ProductFilter = () => {
    return (
        <div className="product-filter">
            <div className="filter-heading tertiary-heading">Filter</div>
            <div className="product-filter__category">
                <div className="product-filter__category--name">Brand</div>
                <div className="filter-option">
                    <input type="checkbox" name="Countrybean" />
                    <label htmlFor="Countrybean">Countrybean</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" name="Nestle" />
                    <label htmlFor="Nestle">Nestle</label>
                </div>
                <div className="product-filter__category--name">Price</div>
                <div className="filter-option">
                    <input type="checkbox" name="Countrybean" />
                    <label htmlFor="Countrybean">Under Rs. 1000</label>
                </div>
                <div className="filter-option">
                    <input type="checkbox" name="Nestle" />
                    <label htmlFor="Nestle">Rs. 1000 - Rs. 2000</label>
                </div>
            </div>
        </div>
    );
};

export default ProductFilter;

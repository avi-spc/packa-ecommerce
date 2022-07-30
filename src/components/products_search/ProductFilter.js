import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../../contexts/productsContext";

const ProductFilter = () => {
    const [searchedProductsBrands, extractSearchedProductsBrands] = useState([]);
    const [filterOptions, setFilterOptions] = useState({ brandNames: [], priceRanges: [] });

    const { products, fetchFilteredProducts } = useContext(ProductsContext);

    const priceCategories = [
        { level: "price-range-0", range: "Under Rs. 1000", min: 0, max: 1000 },
        { level: "price-range-1", range: "Rs. 1000 - Rs. 2000", min: 1000, max: 2000 },
        { level: "price-range-2", range: "Rs. 2000 - Rs. 5000", min: 2000, max: 5000 },
        { level: "price-range-3", range: "Rs. 5000 - Rs. 10000", min: 5000, max: 10000 },
        { level: "price-range-4", range: "Over Rs. 10000", min: 10000, max: 999999999 },
    ];

    useEffect(() => {
        const brandSet = new Set(
            products.map((product) => {
                return product.brand;
            })
        );

        extractSearchedProductsBrands(Array.from(brandSet));
    }, [products]);

    useEffect(() => {
        fetchFilteredProducts(
            filterOptions.brandNames.length || filterOptions.priceRanges.length,
            products.filter((product) => {
                return filterOptions.brandNames.includes(product.brand) || isInPriceRange(product.rate);
            })
        );
    }, [filterOptions]);

    const handlePriceRangeFilter = (e) => {
        if (e.target.checked) {
            setFilterOptions({
                ...filterOptions,
                priceRanges: [...filterOptions.priceRanges, createPriceRangeObject(e.target.value)],
            });
        } else {
            setFilterOptions({
                ...filterOptions,
                priceRanges: filterOptions.priceRanges.filter((uncheckedPriceRange) => {
                    return (
                        uncheckedPriceRange.min !== createPriceRangeObject(e.target.value).min &&
                        uncheckedPriceRange.max !== createPriceRangeObject(e.target.value).max
                    );
                }),
            });
        }
    };

    const handleBrandNamesFilter = (e) => {
        if (e.target.checked) {
            setFilterOptions({ ...filterOptions, brandNames: [...filterOptions.brandNames, e.target.value] });
        } else {
            setFilterOptions({
                ...filterOptions,
                brandNames: filterOptions.brandNames.filter((uncheckedBrand) => {
                    return uncheckedBrand !== e.target.value;
                }),
            });
        }
    };

    const createPriceRangeObject = (selectedLevel) => {
        const priceRange = priceCategories.find((category) => {
            return category.level === selectedLevel;
        });

        return { min: priceRange.min, max: priceRange.max };
    };

    const isInPriceRange = (productPrice) => {
        for (let priceRange of filterOptions.priceRanges) {
            if (productPrice >= priceRange.min && productPrice < priceRange.max) {
                return true;
            }
        }

        return false;
    };

    return (
        <section className="product-filter">
            <div className="filter-heading tertiary-heading">Filter</div>
            <div className="product-filter__category">
                <div className="product-filter__category--name">Brand</div>
                {searchedProductsBrands.map((brand, index) => {
                    return (
                        <div className="filter-option" key={index}>
                            <input
                                type="checkbox"
                                id={brand}
                                name={brand}
                                value={brand}
                                onChange={(e) => handleBrandNamesFilter(e)}
                            />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    );
                })}

                <div className="product-filter__category--name">Price</div>
                {priceCategories.map((priceCategory, index) => {
                    return (
                        <div className="filter-option" key={index}>
                            <input
                                type="checkbox"
                                id={priceCategory.level}
                                name={priceCategory.level}
                                value={priceCategory.level}
                                onChange={(e) => handlePriceRangeFilter(e)}
                            />
                            <label htmlFor={priceCategory.level}>{priceCategory.range}</label>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProductFilter;

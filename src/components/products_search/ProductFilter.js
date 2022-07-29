import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../../contexts/productsContext";

const ProductFilter = () => {
    const [brands, setBrands] = useState(null);
    const [filterOption, setFilterOption] = useState({
        brands: [],
        price: [],
    });

    const { products, fetchFilteredProducts } = useContext(ProductsContext);

    const priceCategories = [
        { level: "price-range-0", range: "Under Rs. 1000", min: 0, max: 1000 },
        { level: "price-range-1", range: "Rs. 1000 - Rs. 2000", min: 1000, max: 2000 },
        { level: "price-range-2", range: "Rs. 2000 - Rs. 5000", min: 2000, max: 5000 },
        { level: "price-range-3", range: "Rs. 5000 - Rs. 10000", min: 5000, max: 10000 },
        { level: "price-range-4", range: "Over Rs. 10000", min: 10000, max: 999999999 },
    ];

    useEffect(() => {
        if (products.length) {
            const brandSet = new Set(
                products.map((product) => {
                    return product.brand;
                })
            );

            setBrands(Array.from(brandSet));
        }
    }, [products]);

    useEffect(() => {
        fetchFilteredProducts(
            filterOption.brands.length || filterOption.price.length,
            products.filter((product) => {
                return filterOption.brands.includes(product.brand) || inPriceRange(product.rate);
            })
        );
    }, [filterOption]);

    const handlePriceFilter = (e) => {
        if (e.target.checked) {
            // setSelectedBrands([...selectedBrands, e.target.value]);
            setFilterOption({ ...filterOption, price: [...filterOption.price, handlePriceRange(e.target.value)] });
        } else {
            // setSelectedBrands(
            //     selectedBrands.filter((uncheckedBrand) => {
            //         return uncheckedBrand !== e.target.value;
            //     })
            // );

            setFilterOption({
                ...filterOption,
                price: filterOption.price.filter((r) => {
                    return (
                        r.min !== handlePriceRange(e.target.value).min && r.max !== handlePriceRange(e.target.value).max
                    );
                }),
            });
        }
    };

    const handleBrandeFilter = (e) => {
        if (e.target.checked) {
            setFilterOption({ ...filterOption, brands: [...filterOption.brands, e.target.value] });
        } else {
            setFilterOption({
                ...filterOption,
                brands: filterOption.brands.filter((uncheckedBrand) => {
                    return uncheckedBrand !== e.target.value;
                }),
            });
        }
    };

    const handlePriceRange = (e) => {
        const priceRange = priceCategories.find((range) => {
            return range.level === e;
        });

        return { min: priceRange.min, max: priceRange.max };
    };

    const inPriceRange = (productPrice) => {
        let inRange = false;
        for (let priceRange of filterOption.price) {
            if (productPrice >= priceRange.min && productPrice < priceRange.max) {
                inRange = true;
                break;
            }
        }

        return inRange;
    };

    return (
        <section className="product-filter">
            <div className="filter-heading tertiary-heading">Filter</div>
            <div className="product-filter__category">
                <div className="product-filter__category--name">Brand</div>
                {brands &&
                    brands.map((brand, index) => {
                        return (
                            <div className="filter-option" key={index}>
                                <input
                                    type="checkbox"
                                    id={brand}
                                    name={brand}
                                    value={brand}
                                    onChange={(e) => handleBrandeFilter(e)}
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
                                onChange={(e) => handlePriceFilter(e)}
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

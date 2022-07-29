import { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../../contexts/productsContext";

const ProductFilter = () => {
    const [brands, setBrands] = useState(null);
    const [selectedBrands, setSelectedBrands] = useState([]);

    const { products, fetchFilteredProducts } = useContext(ProductsContext);

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
            products.filter((product) => {
                return selectedBrands.includes(product.brand);
            })
        );
    }, [selectedBrands]);

    const handleBrands = (e) => {
        if (e.target.checked) {
            setSelectedBrands([...selectedBrands, e.target.value]);
        } else {
            setSelectedBrands(
                selectedBrands.filter((uncheckedBrand) => {
                    return uncheckedBrand !== e.target.value;
                })
            );
        }
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
                                    onChange={(e) => handleBrands(e)}
                                />
                                <label htmlFor={brand}>{brand}</label>
                            </div>
                        );
                    })}

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
        </section>
    );
};

export default ProductFilter;

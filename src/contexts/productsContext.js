import { createContext, useState } from "react";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [productsSearchCategory, setProductsSearchCategory] = useState("");
    const [filteredProducts, setFilteredProducts] = useState({
        isFilterOn: false,
        products: [],
    });

    const fetchSearchedProducts = (searchProducts) => {
        setProducts(searchProducts);
    };

    const fetchFilteredProducts = (isFilterOn, filteredProducts) => {
        setFilteredProducts({ isFilterOn, products: filteredProducts });
    };

    const fetchProductsSearchCategory = (searchCategory) => {
        setProductsSearchCategory(searchCategory);
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                productsSearchCategory,
                filteredProducts,
                fetchSearchedProducts,
                fetchFilteredProducts,
                fetchProductsSearchCategory,
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;

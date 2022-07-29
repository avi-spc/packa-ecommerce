import { createContext, useState } from "react";
import { ProductsStore } from "../store/productsStore";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);
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

    return (
        <ProductsContext.Provider value={{ products, filteredProducts, fetchSearchedProducts, fetchFilteredProducts }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;

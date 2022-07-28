import { createContext, useState } from "react";
import { ProductsStore } from "../store/productsStore";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);

    const fetchSearchedProducts = (searchProducts) => {
        setProducts(searchProducts);
    };

    return (
        <ProductsContext.Provider value={{ products, fetchSearchedProducts }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;

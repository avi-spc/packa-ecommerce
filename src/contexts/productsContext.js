import { createContext, useState } from "react";
import { ProductsStore } from "../store/productsStore";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
    const [products] = useState(ProductsStore);

    return (
        <ProductsContext.Provider value={{ products }}>
            {props.children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;

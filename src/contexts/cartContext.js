import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotalItems, setCartTotalItems] = useState(0);

    const addItemToCart = (product) => {
        setCart([...cart, product]);
    };

    const changeCartTotalItems = (numOfItems) => {
        setCartTotalItems(numOfItems);
    };

    return (
        <CartContext.Provider value={{ cart, cartTotalItems, addItemToCart, changeCartTotalItems }}>
            {props.children}
            {console.log(cart)}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

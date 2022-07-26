import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);

    const addProductToCart = (product) => {
        setCart([...cart, product]);
    };

    const changeCartTotalQuantity = (quantityChange) => {
        setCartTotalQuantity(cartTotalQuantity + quantityChange);
    };

    const changeCartProductQuantity = (productID, newProductQuantity) => {
        const modifiedCart = cart.map((cartProduct) => {
            return cartProduct.id === productID
                ? { ...cartProduct, quantity: newProductQuantity, amount: cartProduct.rate * newProductQuantity }
                : cartProduct;
        });

        setCart(modifiedCart);
    };

    return (
        <CartContext.Provider
            value={{ cart, cartTotalQuantity, addProductToCart, changeCartTotalQuantity, changeCartProductQuantity }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

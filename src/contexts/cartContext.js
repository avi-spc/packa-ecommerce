import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);

    const addProductToCart = (product) => {
        let cartProductCount = 0;
        let isNewProduct = false;

        if (cart.length === 0) {
            isNewProduct = true;
        }

        const freshCart = cart.map((cartProduct) => {
            if (cartProduct.id === product.id) {
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + product.quantity,
                    amount: cartProduct.amount + product.amount,
                };
            }

            cartProductCount++;
            return cartProduct;
        });

        if (cartProductCount === freshCart.length) {
            isNewProduct = true;
        }

        if (isNewProduct) {
            setCart([...cart, product]);
        } else {
            setCart(freshCart);
        }

        setCartTotalAmount(cartTotalAmount + product.quantity * product.rate);
    };

    const changeCartTotalQuantity = (quantityChange) => {
        setCartTotalQuantity(cartTotalQuantity + quantityChange);
    };

    const changeCartProductQuantity = (productID, newProductQuantity) => {
        let modifiedCart = [];

        if (newProductQuantity <= 0) {
            modifiedCart = cart.filter((cartProduct) => {
                if (cartProduct.id === productID) {
                    setCartTotalAmount(cartTotalAmount - cartProduct.amount + newProductQuantity * cartProduct.rate);
                }
                return cartProduct.id !== productID;
            });
        } else {
            modifiedCart = cart.map((cartProduct) => {
                if (cartProduct.id === productID) {
                    setCartTotalAmount(cartTotalAmount - cartProduct.amount + newProductQuantity * cartProduct.rate);
                    return {
                        ...cartProduct,
                        quantity: newProductQuantity,
                        amount: cartProduct.rate * newProductQuantity,
                    };
                } else {
                    return cartProduct;
                }
                // return cartProduct.id === productID
                //     ? { ...cartProduct, quantity: newProductQuantity, amount: cartProduct.rate * newProductQuantity }
                //     : cartProduct;
            });
        }

        setCart(modifiedCart);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                cartTotalQuantity,
                cartTotalAmount,
                addProductToCart,
                changeCartTotalQuantity,
                changeCartProductQuantity,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const addProductToCart = (product) => {
        let isNewProduct = true;

        const freshCart = cart.map((cartProduct) => {
            if (cartProduct.id === product.id) {
                isNewProduct = false;
                return {
                    ...cartProduct,
                    quantity: cartProduct.quantity + product.quantity,
                    amount: cartProduct.amount + product.amount,
                };
            }

            return cartProduct;
        });

        if (isNewProduct) {
            setCart([...cart, product]);
        } else {
            setCart(freshCart);
        }

        setIsCartEmpty(false);
        setCartTotalAmount(cartTotalAmount + product.quantity * product.rate);
    };

    const removeProductFromCart = (productID) => {
        const modifiedCart = cart.filter((cartProduct) => {
            if (cartProduct.id === productID) {
                setCartTotalQuantity(cartTotalQuantity - cartProduct.quantity);
                setCartTotalAmount(cartTotalAmount - cartProduct.amount);
            }

            return cartProduct.id !== productID;
        });

        if (!modifiedCart.length) {
            setIsCartEmpty(true);
        }

        setCart(modifiedCart);
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

        if (!modifiedCart.length) {
            setIsCartEmpty(true);
        }

        setCart(modifiedCart);
    };

    const emptyCart = () => {
        setCartTotalQuantity(0);
        setCartTotalAmount(0);
        setIsCartEmpty(true);
        setCart([]);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                cartTotalQuantity,
                cartTotalAmount,
                isCartEmpty,
                addProductToCart,
                removeProductFromCart,
                changeCartTotalQuantity,
                changeCartProductQuantity,
                emptyCart,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

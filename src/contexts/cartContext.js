import { createContext, useState, useContext } from "react";

import { NotificationContext } from "./notificationContext";

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cart, setCart] = useState([]);
    const [cartTotalQuantity, setCartTotalQuantity] = useState(0);
    const [cartTotalAmount, setCartTotalAmount] = useState(0);
    const [isCartEmpty, setIsCartEmpty] = useState(true);
    const [savedForLater, setSavedForLater] = useState([]);

    const { toggleNotificationStatus } = useContext(NotificationContext);

    const addProductToCart = (product) => {
        let isNewProduct = true;

        if (savedForLater.length) {
            setSavedForLater(
                savedForLater.filter((productSaved) => {
                    return productSaved.productID !== product.id;
                })
            );
        }

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
            if (!product.quantity) {
                product.quantity = 1;
                product.amount = product.rate;
            }
            setCart([...cart, product]);
        } else {
            setCart(freshCart);
        }

        toggleNotificationStatus(true, "Item added to cart");

        setIsCartEmpty(false);
        changeCartTotalQuantity(product.quantity);
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

        toggleNotificationStatus(true, "Item removed to cart");

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

            toggleNotificationStatus(true, "Item removed from cart");
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

        toggleNotificationStatus(true, "Cart emptied");
    };

    const addProductToSavedForLater = (productID) => {
        setSavedForLater([...savedForLater, { productID }]);
        removeProductFromCart(productID);
    };

    const removeProductFromSavedForLater = (productID) => {
        const modifiedCart = savedForLater.filter((savedForLaterProduct) => {
            return savedForLaterProduct.productID !== productID;
        });

        toggleNotificationStatus(true, "Item removed from saved for later");

        setSavedForLater(modifiedCart);
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
                savedForLater,
                addProductToSavedForLater,
                removeProductFromSavedForLater,
            }}
        >
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

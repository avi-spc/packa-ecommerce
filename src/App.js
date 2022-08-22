import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShoppingCart from "./components/cart/ShoppingCart";
import CategoryNavbar from "./components/navbar_category/CategoryNavbar";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import OrdersHistory from "./components/orders/OrdersHistory";
import Product from "./components/product/Product";
import ProductCard from "./components/products_search/ProductCard";
import ProductFilter from "./components/products_search/ProductFilter";
import ProductSearch from "./components/products_search/ProductSearch";
import Footer from "./components/footer/Footer";
import ProductsContextProvider from "./contexts/productsContext";
import CartContextProvider from "./contexts/cartContext";
import CheckoutContextProvider from "./contexts/checkoutContext";
import PaymentProgress from "./components/checkout/PaymentProgress";
import OrdersContextProvider from "./contexts/ordersContext";
import CustomerContextProvider from "./contexts/customerContext";
import Home from "./components/pages/home";
import NotificationContextProvider from "./contexts/notificationContext";
import MobileNavbar from "./components/navbar/MobileNavbar";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NotificationContextProvider>
                    <CartContextProvider>
                        <ProductsContextProvider>
                            <CheckoutContextProvider>
                                <OrdersContextProvider>
                                    <CustomerContextProvider>
                                        <Navbar />
                                        <CategoryNavbar />
                                        <Routes>
                                            <Route path="/" element={<Home />} />
                                            <Route path="/products_search" element={<ProductSearch />} />
                                            <Route path="/products/:product_id" element={<Product />} />
                                            <Route path="/returns_orders" element={<OrdersHistory />} />
                                            <Route path="/shopcart" element={<ShoppingCart />} />
                                            <Route path="/checkout" element={<Checkout />} />
                                            <Route path="/payment_progress" element={<PaymentProgress />} />
                                        </Routes>
                                        <MobileNavbar />
                                        <Footer />
                                    </CustomerContextProvider>
                                </OrdersContextProvider>
                            </CheckoutContextProvider>
                        </ProductsContextProvider>
                    </CartContextProvider>
                </NotificationContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

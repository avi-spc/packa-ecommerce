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

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <CategoryNavbar />
                <Routes>
                    <Route path="/" element={<ProductSearch />} />
                    <Route path="/products/:product_id" element={<Product />} />
                    <Route path="/returns_orders" element={<OrdersHistory />} />
                    <Route path="/shopcart" element={<ShoppingCart />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

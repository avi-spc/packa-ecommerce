import ShoppingCart from "./components/cart/ShoppingCart";
import CategoryNavbar from "./components/navbar_category/CategoryNavbar";
import Checkout from "./components/checkout/Checkout";
import Navbar from "./components/navbar/Navbar";
import OrdersHistory from "./components/orders/OrdersHistory";
import Product from "./components/product/Product";
import ProductCard from "./components/products_search/ProductCard";
import ProductFilter from "./components/products_search/ProductFilter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryNavbar />
    </div>
  );
}

export default App;

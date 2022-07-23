import ShoppingCart from "./components/cart/ShoppingCart";
import CategoryNavar from "./components/category_navbar/CategoryNavbar";
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
      <CategoryNavar />
    </div>
  );
}

export default App;

import CategoryNavar from "./components/category_navbar/CategoryNavbar";
import Navbar from "./components/navbar/Navbar";
import Product from "./components/product/Product";
import ProductCard from "./components/products_search/ProductCard";
import ProductFilter from "./components/products_search/ProductFilter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <CategoryNavar />
      {/* <ProductCard />
      <ProductFilter /> */}
      <Product />
    </div>
  );
}

export default App;

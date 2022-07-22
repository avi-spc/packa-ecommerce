import CardProductBtn from "../buttons/CartProductBtn";
import CartProductsList from "./CartProductsList";
import CartSubtotal from "./CartSubtotal";
import SubtotalSidebar from "./SubtotalSidebar";

const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <div className="heading-with-emptybtn">
        <div className="primary-heading">Shopping Cart</div>
        <CardProductBtn name="Empty Cart" />
      </div>
      <div className="cart-with-sidebar">
        <div className="cart-with-subtotal">
          <CartProductsList />
          <CartSubtotal />
        </div>
        <SubtotalSidebar />
      </div>
    </div>
  );
};

export default ShoppingCart;

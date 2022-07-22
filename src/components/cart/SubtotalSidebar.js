import CardProductBtn from "../buttons/CartProductBtn";
import PriceTag from "../product/PriceTag";

const SubtotalSidebar = () => {
  return (
    <div className="subtotal-sidebar">
      <div>{`Subtotal ( 2 items )`}</div>
      <PriceTag variant="subtotal"/>
      <CardProductBtn name="Checkout" />
    </div>
  );
};

export default SubtotalSidebar;

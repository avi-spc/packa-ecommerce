import OrderActions from "./OrderActions";
import OrderProduct from "./OrderProduct";

const IndividualOrderHistory = ({ orderedProducts, deliveryDate }) => {
    return (
        <div className="orders-history__individual">
            <div className="secondary-heading">Delivery by {deliveryDate}</div>
            <div className="order-products-list">
                <div>
                    {orderedProducts.map((product) => {
                        return <OrderProduct product={product} key={product.id} />;
                    })}
                </div>
                <OrderActions />
            </div>
        </div>
    );
};

export default IndividualOrderHistory;

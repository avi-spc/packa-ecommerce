import IndividualItem from "./IndividualItem";

const ItemsAndDelivery = ({ cartProducts }) => {
    return (
        <section className="section-items-p-delivery">
            <div className="secondary-heading">Items and delivery</div>
            <div className="items-p-delivery__items-list">
                {cartProducts.map((cartProduct) => {
                    return <IndividualItem cartProduct={cartProduct} key={cartProduct.id} />;
                })}
            </div>
        </section>
    );
};

export default ItemsAndDelivery;

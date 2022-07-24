import IndividualItem from "./IndividualItem";

const ItemsAndDelivery = () => {
    return (
        <section className="section-items-p-delivery">
            <div className="secondary-heading">Items and delivery</div>
            <div className="items-p-delivery__items-list">
                <IndividualItem />
                <IndividualItem />
            </div>
        </section>
    );
};

export default ItemsAndDelivery;
